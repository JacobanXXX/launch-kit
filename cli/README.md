# launch-kit CLI

> `npx launch-kit init` 한 번이면 본인 프로젝트의 약관·SEO·Analytics·PG 코드 자동 생성.

## 사용법

```bash
# Recommended — without install
npx launch-kit init

# Or install globally
npm install -g launch-kit
launch-kit init
```

## 인터랙티브 prompt

```
? 프로젝트 이름 (디렉토리명) (my-saas):
? 브랜드명 (영문, 예: Verbio Labs):
? 사업자등록상 상호 (예: 식빵영어 (Sikbang English)):
? 짧은 상호 (예: 식빵영어):
? 보조 브랜드명 (선택):
? 도메인 (예: verbiolabs.com):
? 대표자명 (영문 병기, 예: 안준영 (Jacob)):
? 대표자명 한글:
? 고객·개인정보 보호책임자 이메일:
? 사업장 주소:
? 사업자등록번호 (예: 123-45-67890):
? 통신판매업 신고번호 (예: 제 2026-서울강남-0001호):
? 어떤 PG 쓰시나요?
  1) 토스페이먼츠 (TossPayments)
  2) 포트원 (PortOne, 구 아임포트)
  3) 이니시스 (KG Inicis)
  4) 아직 미정 / 결제 없음
? Microsoft Clarity 프로젝트 ID (없으면 Enter):
? Google Search Console 인증 코드 (없으면 Enter):
```

## 생성되는 파일

```
your-project/
├── README.md                       ← 다음 단계 가이드
├── 404.html                        ← 브랜드 404 페이지
├── sitemap.xml                     ← 본인 도메인 SEO
├── robots.txt
├── jsonld-organization.json        ← 구조화 데이터
├── claude.md                       ← AI 코딩 룰
├── PRE_LAUNCH_CHECKLIST.md         ← 출시 전 체크리스트
│
├── legal/                          ← 한국 PIPA·전자상거래법 호환
│   ├── privacy.html               ← 본인 정보로 치환됨
│   ├── terms.html
│   ├── refund.html
│   └── pg-addendum-XXX.md         ← 선택한 PG 약관 추가본
│
├── snippets/                       ← <head>·<body>에 복사할 코드
│   ├── clarity.html               ← Clarity 스크립트 (ID 자동 치환)
│   ├── mobile-hamburger.html      ← 햄버거 메뉴
│   ├── app-store-badge.html
│   ├── a11y.css
│   └── payment-XXX.html           ← 선택한 PG 결제 코드
│
├── scripts/
│   └── og-image-generator.py      ← OG 이미지 생성 Python
│
└── favicon/                        ← Favicon 풀세트 (브랜드 마크 교체 필요)
    └── *.png, .svg, .ico
```

## 의존성

**0 dependencies.** Pure Node.js. Node 14+ 필요.

## 로컬 테스트

```bash
git clone https://github.com/JacobanXXX/launch-kit.git
cd launch-kit
node cli/index.js init
```

## npm 배포 (이 repo 관리자용)

```bash
# 1. version 올리기
npm version patch

# 2. publish
npm publish --access public

# 3. tag push
git push --tags
```

이후 사용자는 `npx launch-kit init` 으로 사용 가능.

## 향후 추가 예정

- `--yes` 플래그 (비대화형 모드, CI/CD용)
- `--config <file>` 옵션 (입력 자동화)
- `launch-kit add component <name>` (개별 컴포넌트 추가)
- `launch-kit update` (이미 생성된 프로젝트 업데이트)
