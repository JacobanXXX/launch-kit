#!/usr/bin/env node
/**
 * launch-kit init — Interactive scaffold for Korean SaaS launch.
 * Pure Node.js, zero dependencies. Works with `npx launch-kit init`.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ─── ANSI colors (no chalk dep) ─────────────────────────────────
const c = {
  reset: '\x1b[0m', dim: '\x1b[2m', bold: '\x1b[1m',
  cyan: '\x1b[36m', green: '\x1b[32m', red: '\x1b[31m',
  yellow: '\x1b[33m', gray: '\x1b[90m',
};
const log = (s) => console.log(s);
const ok = (s) => log(`${c.green}✓${c.reset} ${s}`);
const info = (s) => log(`${c.cyan}→${c.reset} ${s}`);
const warn = (s) => log(`${c.yellow}⚠${c.reset}  ${s}`);
const err = (s) => log(`${c.red}✗${c.reset} ${s}`);
const dim = (s) => `${c.gray}${s}${c.reset}`;

// ─── Banner ─────────────────────────────────────────────────────
function banner() {
  log('');
  log(`${c.bold}${c.cyan}  Launch Kit${c.reset} ${dim('— 12 things to ship a Korean SaaS')}`);
  log(`${dim('  https://github.com/JacobanXXX/launch-kit')}\n`);
}

// ─── Prompt helpers ─────────────────────────────────────────────
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q, def = '') => new Promise((res) => {
  const prompt = def ? `${c.bold}?${c.reset} ${q} ${dim(`(${def})`)}: ` : `${c.bold}?${c.reset} ${q}: `;
  rl.question(prompt, (a) => res(a.trim() || def));
});
const choose = async (q, options) => {
  log(`${c.bold}?${c.reset} ${q}`);
  options.forEach((o, i) => log(`  ${dim(`${i + 1})`)} ${o}`));
  while (true) {
    const a = await ask('  선택', '1');
    const n = parseInt(a, 10);
    if (n >= 1 && n <= options.length) return options[n - 1];
    warn('1-' + options.length + ' 중 선택해주세요');
  }
};

// ─── Default variables ─────────────────────────────────────────
const TODAY = new Date().toISOString().slice(0, 10);

// ─── Main ───────────────────────────────────────────────────────
async function main() {
  banner();

  // 1. Project name
  const projectName = await ask('프로젝트 이름 (디렉토리명)', 'my-saas');
  const targetDir = path.resolve(process.cwd(), projectName);
  if (fs.existsSync(targetDir)) {
    err(`디렉토리 이미 존재함: ${targetDir}`);
    rl.close();
    process.exit(1);
  }

  log('');
  log(dim('─── 회사 정보 (약관에 들어감) ───────────────────────────'));

  const COMPANY_BRAND = await ask('브랜드명 (영문, 예: Verbio Labs)');
  const COMPANY_LEGAL_NAME = await ask('사업자등록상 상호 (예: 식빵영어 (Sikbang English))');
  const COMPANY_LEGAL_NAME_SHORT = await ask('짧은 상호 (예: 식빵영어)', COMPANY_LEGAL_NAME.split(' ')[0]);
  const COMPANY_BRAND_ALT = await ask('보조 브랜드명 (선택)', COMPANY_BRAND);
  const DOMAIN = await ask('도메인 (예: verbiolabs.com)');
  const REPRESENTATIVE_NAME = await ask('대표자명 (영문 병기, 예: 안준영 (Jacob))');
  const REPRESENTATIVE_NAME_KR = await ask('대표자명 한글', REPRESENTATIVE_NAME.split(' ')[0]);
  const CONTACT_EMAIL = await ask('고객·개인정보 보호책임자 이메일');
  const BUSINESS_ADDRESS = await ask('사업장 주소');
  const BUSINESS_REG_NUMBER = await ask('사업자등록번호 (예: 123-45-67890)');
  const ECOMMERCE_REG_NUMBER = await ask('통신판매업 신고번호 (예: 제 2026-서울강남-0001호)');

  log('');
  log(dim('─── PG (결제대행사) ──────────────────────────────────'));
  const pg = await choose('어떤 PG 쓰시나요?', [
    '토스페이먼츠 (TossPayments)',
    '포트원 (PortOne, 구 아임포트)',
    '이니시스 (KG Inicis)',
    '아직 미정 / 결제 없음',
  ]);

  log('');
  log(dim('─── Analytics & SEO ─────────────────────────────────'));
  const CLARITY_PROJECT_ID = await ask('Microsoft Clarity 프로젝트 ID (없으면 Enter)', '');
  const GOOGLE_VERIFICATION_CODE = await ask('Google Search Console 인증 코드 (없으면 Enter)', '');

  log('');
  info('파일 생성 중...');
  fs.mkdirSync(targetDir, { recursive: true });

  // 변수 맵
  const vars = {
    COMPANY_BRAND, COMPANY_LEGAL_NAME, COMPANY_LEGAL_NAME_SHORT, COMPANY_BRAND_ALT,
    DOMAIN, REPRESENTATIVE_NAME, REPRESENTATIVE_NAME_KR,
    CONTACT_EMAIL, BUSINESS_ADDRESS, BUSINESS_REG_NUMBER, ECOMMERCE_REG_NUMBER,
    CLARITY_PROJECT_ID: CLARITY_PROJECT_ID || 'YOUR_CLARITY_ID',
    GOOGLE_VERIFICATION_CODE: GOOGLE_VERIFICATION_CODE || 'YOUR_VERIFICATION_CODE',
    LAST_MODIFIED_DATE: TODAY,
    COMPANY_DESCRIPTION: `${COMPANY_BRAND} — Korean SaaS.`,
    STREET_ADDRESS: BUSINESS_ADDRESS.split(' ').slice(2).join(' '),
    LOCALITY: BUSINESS_ADDRESS.split(' ')[1] || '',
    REGION: BUSINESS_ADDRESS.split(' ')[0] || '',
    PG_PROVIDER: pg,
  };

  // 변수 치환 함수
  function processTemplate(templatePath, outPath) {
    let content = fs.readFileSync(templatePath, 'utf8');
    Object.entries(vars).forEach(([k, v]) => {
      content = content.split(`{{${k}}}`).join(v);
    });
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, content);
  }

  // CLI is in launch-kit/cli/, templates are in launch-kit/
  const ROOT = path.resolve(__dirname, '..');

  // Files to generate (template → output)
  const FILES = [
    ['legal/privacy.html.template', 'legal/privacy.html'],
    ['legal/terms.html.template', 'legal/terms.html'],
    ['legal/refund.html.template', 'legal/refund.html'],
    ['seo/sitemap.xml.template', 'sitemap.xml'],
    ['seo/robots.txt', 'robots.txt'],
    ['seo/jsonld-organization.json', 'jsonld-organization.json'],
    ['analytics/clarity.html', 'snippets/clarity.html'],
    ['components/mobile-hamburger.html', 'snippets/mobile-hamburger.html'],
    ['components/404.html', '404.html'],
    ['components/app-store-badge.html', 'snippets/app-store-badge.html'],
    ['components/a11y.css', 'snippets/a11y.css'],
    ['components/og-image-generator.py', 'scripts/og-image-generator.py'],
    ['claude.md', 'claude.md'],
    ['checklist.md', 'PRE_LAUNCH_CHECKLIST.md'],
  ];

  let generated = 0;
  for (const [src, dst] of FILES) {
    const srcPath = path.join(ROOT, src);
    if (!fs.existsSync(srcPath)) continue;
    processTemplate(srcPath, path.join(targetDir, dst));
    generated++;
  }
  ok(`${generated}개 파일 생성됨`);

  // Copy favicon set as-is (binary)
  const faviconSrc = path.join(ROOT, 'components/favicon');
  const faviconDst = path.join(targetDir, 'favicon');
  if (fs.existsSync(faviconSrc)) {
    fs.mkdirSync(faviconDst, { recursive: true });
    for (const f of fs.readdirSync(faviconSrc)) {
      fs.copyFileSync(path.join(faviconSrc, f), path.join(faviconDst, f));
    }
    ok(`favicon set 복사됨 (브랜드 마크는 본인 것으로 교체하세요)`);
  }

  // PG-specific addendum
  const pgKey = pg.includes('토스') ? 'tosspayments' : pg.includes('포트원') ? 'portone' : pg.includes('이니시스') ? 'inicis' : null;
  if (pgKey) {
    const pgFile = path.join(ROOT, `legal/pg/${pgKey}.md`);
    if (fs.existsSync(pgFile)) {
      processTemplate(pgFile, path.join(targetDir, `legal/pg-addendum-${pgKey}.md`));
      ok(`PG 약관 추가본 생성됨: legal/pg-addendum-${pgKey}.md`);
    }
    const pgComp = path.join(ROOT, `components/payment/${pgKey}.html`);
    if (fs.existsSync(pgComp)) {
      processTemplate(pgComp, path.join(targetDir, `snippets/payment-${pgKey}.html`));
      ok(`결제 코드 샘플 생성됨: snippets/payment-${pgKey}.html`);
    }
  }

  // Generate README
  const readme = `# ${COMPANY_BRAND}

> Generated by [launch-kit](https://github.com/JacobanXXX/launch-kit) on ${TODAY}

## 다음 단계

1. **약관 검토** — \`legal/\` 안의 3개 파일을 변호사 1회 검토 후 사용
2. **HTML 페이지 작성** — \`snippets/\` 안의 코드를 본인 사이트의 적절한 위치에 붙여넣기
3. **분석 활성화** — Microsoft Clarity 가입 후 ID 받아서 \`snippets/clarity.html\`의 \`{{CLARITY_PROJECT_ID}}\` 치환
4. **SEO 등록** — Google Search Console에 사이트 등록 + sitemap.xml 제출
5. **배포** — Vercel · Netlify · Cloudflare Pages 등으로 배포

## 변수 치환 결과

| Key | Value |
|-----|-------|
| Brand | ${COMPANY_BRAND} |
| Domain | ${DOMAIN} |
| Email | ${CONTACT_EMAIL} |
| Representative | ${REPRESENTATIVE_NAME} |
| PG | ${pg} |
| Clarity | ${CLARITY_PROJECT_ID || '(미설정)'} |
| Search Console | ${GOOGLE_VERIFICATION_CODE || '(미설정)'} |

## 문의 / 개선 제안

[github.com/JacobanXXX/launch-kit/issues](https://github.com/JacobanXXX/launch-kit/issues)
`;
  fs.writeFileSync(path.join(targetDir, 'README.md'), readme);
  ok('README.md 생성됨');

  log('');
  log(`${c.green}${c.bold}🎉 완료!${c.reset}`);
  log(`   프로젝트 위치: ${c.cyan}${targetDir}${c.reset}`);
  log('');
  log(dim('다음 명령어:'));
  log(`   ${c.cyan}cd ${projectName}${c.reset}`);
  log(`   ${c.cyan}cat README.md${c.reset}    ${dim('# 다음 단계 가이드')}`);
  log('');

  rl.close();
}

// CLI 진입
const cmd = process.argv[2];
if (cmd === 'init' || !cmd) {
  main().catch((e) => { err(e.message); process.exit(1); });
} else if (cmd === '--version' || cmd === '-v') {
  log(require('../package.json').version);
} else {
  log(`Usage: launch-kit init`);
  process.exit(1);
}
