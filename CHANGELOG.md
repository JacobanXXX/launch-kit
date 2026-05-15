# Changelog

All notable changes to Launch Kit are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [2.0.0] — 2026-05-15 — 🚀 Major Upgrade

### 🎉 Highlights
- **CLI tool**: `npx launch-kit init` — 한 줄로 프로젝트 자동 생성
- **Korean PG integrations**: 토스페이먼츠 · 포트원 · 이니시스 약관 + 코드
- **Live demo site**: `demo/` 폴더에 인터랙티브 미리보기

### Added
- `cli/index.js` — Pure Node.js (0 deps) 인터랙티브 CLI
- `cli/README.md` — CLI 사용·배포 가이드
- `package.json` — npm 배포 가능 (bin: launch-kit)
- `legal/pg/` — 한국 PG 3사 약관 추가본
  - `tosspayments.md` (토스페이먼츠)
  - `portone.md` (포트원, 구 아임포트)
  - `inicis.md` (KG 이니시스)
  - `README.md` (PG 선택 가이드)
- `components/payment/` — PG별 결제 코드 샘플
  - `tosspayments.html` (Payment Widget)
  - `portone.html` (V2 SDK 멀티 PG)
  - `inicis.html` (Standard 결제창)
  - `README.md` (백엔드 검증 가이드)
- `demo/` — Vercel 배포 가능 라이브 데모 사이트
  - `index.html` — 인터랙티브 데모 페이지
  - `README.md` — Vercel·GitHub Pages 배포 가이드

### Changed
- `package.json` 추가 (이전엔 npm 미배포)
- `keywords` 확장 (PG 키워드 추가 — tosspayments, portone, inicis)

## [1.1.0] — 2026-05-15 — Tier S Upgrade

### Added
- `.github/` 폴더 풀세트 (Issue·PR·Workflow templates)
- `CODE_OF_CONDUCT.md` (Contributor Covenant 2.1)
- `SECURITY.md` (취약점 신고 절차)
- `README.en.md` (영문 버전)
- `images/social-preview.png` (1280×640 GitHub social card)
- `components/favicon/` 풀세트 (SVG/ICO/PNG 7개 + README)

### Changed
- README.md 강화: Personas section, Architecture diagram, Star history embed, Language switcher
- markdown-link-check workflow 비차단 모드로 변경

## [1.0.0] — 2026-05-15 — Initial release 🎉

verbiolabs.com 만들면서 마주친 12개 함정 정리.

### Added
- **Legal** — 한국 PIPA·전자상거래법 호환 약관 3종 템플릿
- **SEO** — sitemap, robots.txt, JSON-LD Organization 템플릿
- **Analytics** — Microsoft Clarity 스니펫 + 개인정보 disclosure 가이드
- **Components** — mobile-hamburger, 404, app-store-badge, a11y.css, og-image-generator.py
- **AI Workflow** — Universal `claude.md` 템플릿
- **Documentation** — README, checklist.md, threads-posts.md, CONTRIBUTING.md

---

> 새 항목 추가 시 [CONTRIBUTING.md](CONTRIBUTING.md) 참고
