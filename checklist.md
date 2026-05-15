# Pre-Launch Checklist — 12 Items

> Claude Code로 SaaS 만들고 출시 직전 마지막 1주를 깎이지 않으려면.
> 한 항목씩 체크하면서 진행하세요.

---

## 🎨 UX

### ☐ 1. Mobile hamburger menu
- [ ] 모바일(≤768px)에서 nav 메뉴가 보이는가?
- [ ] 햄버거 아이콘 → 풀스크린 드로어 작동?
- [ ] ESC 키 / 외부 영역 클릭으로 닫힘?
- [ ] 메뉴 항목 클릭 시 자동 닫힘 + 해당 섹션 스크롤?
- [ ] 드로어 열려있는 동안 body scroll lock?
- 📂 [`components/mobile-hamburger.html`](components/mobile-hamburger.html)

### ☐ 2. Brand 404 page
- [ ] 잘못된 URL 입력 시 Vercel/Netlify 기본 페이지 X
- [ ] 사이트 톤과 일관된 디자인
- [ ] "메인으로" 버튼 명확
- [ ] `<meta name="robots" content="noindex">` 추가 (검색 노출 X)
- 📂 [`components/404.html`](components/404.html)

### ☐ 3. App Store / Play Store badges
- [ ] 앱 출시했다면 hero에 명확한 다운로드 버튼
- [ ] Apple 로고 + Google Play 로고 SVG 정확히
- [ ] "Download on the App Store" / "GET IT ON Google Play" 표기 규정 준수
- [ ] 모바일에서 클릭 시 앱이 자동으로 열림
- 📂 [`components/app-store-badge.html`](components/app-store-badge.html)

---

## ⚖️ Legal (한국 SaaS 필수)

### ☐ 4. Privacy Policy (개인정보처리방침)
- [ ] 개인정보보호법 30조 따라 12개 섹션 모두 포함
- [ ] 처리 위탁 표 — 모든 외부 서비스(PG·호스팅·Analytics) 명시
- [ ] 개인정보 보호책임자 연락처 명시
- [ ] 변경 시 7일 전 공지 명시
- 📂 [`legal/privacy.html.template`](legal/privacy.html.template)

### ☐ 5. Terms of Use (이용약관)
- [ ] 전자상거래법 호환
- [ ] 청약철회 조항 (제17조 호환)
- [ ] 결제수단 / PG사 명시
- [ ] 분쟁 해결 / 관할 법원 조항
- 📂 [`legal/terms.html.template`](legal/terms.html.template)

### ☐ 6. Refund Policy (환불·청약철회 정책)
- [ ] 디지털 콘텐츠 청약철회 7일 원칙
- [ ] 청약철회 제한 사유 (시청 시작 시점 등)
- [ ] 환불 처리 기간 (영업일 기준)
- [ ] 분쟁 조정 기관 안내
- 📂 [`legal/refund.html.template`](legal/refund.html.template)

---

## 🔍 SEO

### ☐ 7. Meta tags 풀세트
- [ ] `<title>` (50-60자, 키워드 포함)
- [ ] `<meta name="description">` (150-160자)
- [ ] `<link rel="canonical">` (모든 페이지에 자기 URL)
- [ ] `<meta name="robots" content="index, follow">`

### ☐ 8. OG image + Twitter card
- [ ] 1200×630 PNG
- [ ] og:title, og:description, og:image, og:url 모두 명시
- [ ] twitter:card="summary_large_image"
- [ ] 카톡·페북·X에서 공유 테스트
- 📂 [`components/og-image-generator.py`](components/og-image-generator.py)

### ☐ 9. sitemap.xml + robots.txt
- [ ] 모든 공개 페이지 sitemap에 등재
- [ ] `<changefreq>`, `<priority>` 적절히
- [ ] robots.txt에 sitemap 위치 명시
- [ ] Google Search Console에 sitemap 제출
- 📂 [`seo/`](seo/)

### ☐ 10. JSON-LD structured data
- [ ] Organization schema (회사 정보, 로고)
- [ ] WebSite schema
- [ ] 강의·제품 있으면 Course / Product schema
- 📂 [`seo/jsonld-organization.json`](seo/jsonld-organization.json)

---

## 📊 Analytics + Search Console

### ☐ 11. Microsoft Clarity (무료, heatmap + 세션 녹화)
- [ ] [clarity.microsoft.com](https://clarity.microsoft.com) 가입 → 프로젝트 생성
- [ ] 스크립트 `<head>`에 추가
- [ ] 24시간 후 데이터 들어오는지 확인
- [ ] **개인정보처리방침 처리 위탁 표에 Microsoft Clarity 명시** (한국 PIPA 준수)
- 📂 [`analytics/clarity.html`](analytics/clarity.html)

### ☐ 12. Google Search Console
- [ ] [search.google.com/search-console](https://search.google.com/search-console) 등록
- [ ] HTML 태그 인증 (`<meta name="google-site-verification">`)
- [ ] sitemap.xml 제출
- [ ] 1주 후 색인 상태 확인
- 📂 [`seo/google-search-console.md`](seo/google-search-console.md)

---

## 보너스 (있으면 좋은 것)

### ☐ A. Favicon 풀세트
- [ ] favicon.svg (벡터)
- [ ] favicon.ico (16/32/48 multi-resolution)
- [ ] favicon-16/32/180/192/512.png
- [ ] `<head>`에 모든 link 등록
- 📂 [`components/favicon/`](components/favicon/)

### ☐ B. 접근성 기본기
- [ ] `prefers-reduced-motion` 미디어 쿼리 적용
- [ ] `:focus-visible` 키보드 포커스 표시
- [ ] SVG 아이콘에 `role="img" aria-label="..."`
- [ ] 폼 input에 `<label>` 또는 `aria-label`
- 📂 [`components/a11y.css`](components/a11y.css)

### ☐ C. claude.md
- [ ] 프로젝트 컨벤션 명시
- [ ] "최소 변경 원칙" 등 핵심 룰
- [ ] 절대 자동으로 하면 안 되는 것 명시 (production / 결제 / DB 등)
- 📂 [`claude.md`](claude.md)

---

## 출시 후 1주 안에

- [ ] Search Console에서 색인 상태 확인
- [ ] Clarity 첫 세션 녹화 5개 정도 시청 (UX 함정 발견)
- [ ] 모바일에서 본인이 직접 페이지 둘러보기
- [ ] 친구 3명한테 카톡으로 링크 보내서 어떻게 보이는지 확인
- [ ] OG 이미지 카톡·페북에 잘 뜨는지 확인 ([Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/))

---

> 12가지 다 체크하면 출시 준비 끝. 각 항목 [코드/템플릿](README.md)은 그냥 떠가서 변수만 바꾸면 됩니다.
