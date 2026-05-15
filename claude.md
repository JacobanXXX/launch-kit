# claude.md — Indie Maker Edition

> verbiolabs.com 만들면서 200+ 커밋 동안 검증된 룰. 본인 프로젝트에 그대로 떠가서 쓰세요.

이 파일은 Claude Code (또는 Cursor, Aider 등 어떤 AI 코딩 도구)에 프로젝트 컨벤션을 주입하는 용도입니다.
프로젝트 루트에 `claude.md` 또는 `.cursorrules` 로 두면 됩니다.

---

## Project Context

[프로젝트 한 줄 설명. 예: "verbiolabs.com — AI for human language. 부산 기반 1인 SaaS."]

**Stack**: HTML / Tailwind / Vanilla JS / Vercel
**Audience**: [한국 사용자 / 글로벌 / 양쪽]
**Stage**: Production · 소규모 트래픽 · 결제 도입 중

---

## Core Rules — 절대 지킬 것

### 1. 최소 변경 원칙
- **요청한 것만** 수정. 옆에 있는 코드 임의로 리팩토링 금지.
- "더 깔끔하게 만들 수 있을 것 같아서"는 금지 사유. 별도 작업으로 분리.

### 2. 보여주고 진행하기 (Plan-then-Execute)
- 파일 3개 이상 변경 / 50줄 이상 변경 / 새 라이브러리 추가 → **먼저 plan 출력 후 confirm**.
- 작은 변경(타입 한 줄, 텍스트 수정)은 바로 진행 OK.

### 3. 새 dependency 함부로 추가 금지
- "이 라이브러리 쓰면 좋을 것 같아서"는 금지.
- 추가 시 반드시 ask: 왜 필요한가, 번들 사이즈, 대안.
- 1KB 미만이거나 dev-dependency면 OK.

### 4. 기존 패턴 따르기
- 새 컴포넌트는 기존 패턴 검색 후 동일하게.
- 새 색상·간격 추가 X. CSS variables 우선 (`var(--apple-black)` 등).
- 새 폰트 추가 X. 기존 `--font-en`, `--font-kr`, `--font-serif` 사용.

### 5. 테스트 후에 완료 표시
- 코드 변경 후 **반드시 한 번 실행**해서 동작 확인.
- 콘솔 에러 0개 확인.
- 모바일 뷰포트 (375px) 한 번 확인.
- 그 후에야 "완료"로 표시.

---

## Commit Message Convention

```
type: short summary (50자 이내)

- Why: 왜 이 변경이 필요한가
- What: 어떤 파일 어떻게 바뀌었는가
- Test: 어떻게 검증했는가
```

`type`: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`, `seo`, `a11y`

예시:
```
fix: hide forced <br> on mobile to prevent jagged text

- Why: 한국어 부제가 모바일에서 4-5줄로 깨져 보임
- What: 3개 stage-subtitle에 <br class="br-md-hide"> 적용 + CSS 미디어쿼리 추가
- Test: Chrome DevTools 375px 뷰포트로 3개 섹션 모두 확인
```

---

## Decision Logging

큰 결정은 README나 별도 `DECISIONS.md`에 1줄 기록:

```
2026-05-15: Plausible 대신 Microsoft Clarity 사용 — 무료 무제한 + 세션 녹화 필요
2026-05-12: 한국어 폰트 Pretendard 사용 (NotoSansKR 대비 가벼움)
```

---

## When to Stop and Ask

다음 경우 **반드시 사용자 확인 받고 진행**:

- 🛑 **Production 환경 변수** 다룰 때 (API key, secret)
- 🛑 **결제 / 환불** 로직 변경
- 🛑 **개인정보 수집 / 저장** 코드
- 🛑 **데이터베이스 스키마 변경** (특히 ALTER, DROP)
- 🛑 **`git reset --hard` / `git push --force`** 같은 파괴적 명령
- 🛑 **법적 문서** (privacy/terms/refund) 자동 수정 X — 변호사 검토 필요
- 🛑 **Analytics 데이터 삭제** — 한 번 지우면 복구 X

---

## Anti-Patterns — 하지 마

### ❌ "어차피 같은 거니까 한 번에 처리"
큰 변경을 하나의 커밋에 몰아넣지 마. 1 커밋 = 1 의도.

### ❌ 커밋 메시지에 "WIP", "fix bug", "update"
6개월 후 본인이 봐도 모름.

### ❌ 새 컴포넌트 만들기 전에 검색 안 함
이미 있는 컴포넌트가 또 생김.

### ❌ TODO 주석 남발
`// TODO: 나중에 수정` → 절대 수정 안 됨. 차라리 GitHub Issue로.

### ❌ 콘솔 로그 production에 남김
`console.log("here")` 검색해서 다 지우고 commit.

---

## File Structure

```
.
├── claude.md              ← 이 파일
├── DECISIONS.md           ← 큰 결정 로그
├── README.md
├── index.html
├── privacy.html / terms.html / refund.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── og-image.png
├── favicon.svg / .ico / *.png
└── ...
```

---

## Project-Specific Context

[여기에 본인 프로젝트 specific 정보 추가:
- 디자인 시스템 (색상 팔레트, 폰트, 간격)
- 도메인 용어
- 핵심 사용자 흐름
- 알려진 quirk]

예시 (verbio labs):
- 색상: `--apple-black`, `--apple-gray-text`, `--apple-blue` (시스템 검색해서 사용)
- 영문 폰트: Inter (`--font-en`)
- 한글 폰트: Pretendard (`--font-kr`, `word-break: keep-all` 필수)
- 세리프: Instrument Serif Italic (`--font-serif`, V 모노그램 + 헤드라인 강조)

---

## Updates

이 파일은 살아있는 문서. 새 함정 발견할 때마다 업데이트.

**Last updated**: 2026-05-15

---

> 이 템플릿은 [verbiolabs.com/launch-kit](https://github.com/[your-org]/launch-kit)에서 가져왔습니다.
> 본인 프로젝트에 맞게 수정해서 쓰세요.
