# Google Search Console — 등록 가이드

> Google 검색 노출 + sitemap 제출 + 검색 키워드 분석. 무료 필수.

## 1. 가입 + 속성 추가

1. [search.google.com/search-console](https://search.google.com/search-console) 접속
2. **속성 추가** 클릭
3. **"URL 접두어"** 선택 (왼쪽, 더 간단)
4. `https://{{DOMAIN}}` 입력 → **계속**

## 2. 소유권 확인 — HTML 태그 방법 권장

5. 인증 방법 중 **"HTML 태그"** 선택
6. 다음과 비슷한 코드를 받음:
   ```html
   <meta name="google-site-verification" content="ABC123xyz_verylongstring..." />
   ```
7. 본인 사이트의 `index.html` `<head>` 안에 붙여넣기 (모든 페이지에 동일하게 추가하면 더 좋음)
8. 사이트 배포 후 Search Console로 돌아가서 **"확인"** 클릭

## 3. Sitemap 제출

9. 왼쪽 메뉴 **"Sitemaps"** 클릭
10. 새 사이트맵 추가: `sitemap.xml` 입력 → **제출**
11. "성공" 메시지 뜨면 완료

→ 며칠 내로 구글이 sitemap 기반으로 모든 페이지 색인 시작

## 4. 등록 후 1주 안에 확인할 것

- [ ] **색인 상태** (Pages 메뉴) — "색인 생성됨" 페이지 수 확인
- [ ] **모바일 사용성** (Experience > Mobile usability) — 오류 없는지
- [ ] **Core Web Vitals** — 페이지 속도 점수
- [ ] **검색 실적** (Performance) — 어떤 키워드로 노출되는지

## 트러블슈팅

**"확인이 실패했습니다"가 뜨는 경우:**
- meta 태그가 `<head>` 안에 있는지 확인
- 강력 새로고침 (`⌘+Shift+R`)으로 캐시 무효화
- 시크릿 창에서 `view-source:https://{{DOMAIN}}` 열어서 meta 태그 보이는지 확인
- Vercel 등 CDN 사용 시 배포 완료까지 30초~2분 대기

**색인이 1주일 후에도 0개:**
- Pages 메뉴에서 "URL 검사" → 본인 사이트 URL 입력 → "색인 등록 요청" 수동 실행
- robots.txt에 `Disallow: /` 같은 게 잘못 들어갔는지 확인
