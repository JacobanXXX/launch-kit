# Launch Kit

> Claude Code로 SaaS 만들고 출시 직전에 빠뜨려서 1주일 깎이는 12가지.
> 다 copy-paste 가능한 코드로 정리했음.

verbiolabs.com 만들면서 마주친 함정들, 검증된 해결 코드, 한국 법령(전자상거래법·PIPA) 호환 템플릿까지.

본인 인디 프로젝트에 그대로 떠가서 쓰세요.

---

## 왜 이 repo가 필요한가

Claude Code로 코딩하면 **사이트 자체는 30분**이면 나옵니다.

문제는 그 다음. 출시 가능한 상태까지 가려면:

- 모바일에서 메뉴가 사라지는 거 발견 (햄버거 어디?)
- 갤럭시에서 폰트가 깨짐 (Pretendard 안 깔림)
- 카톡으로 링크 보냈는데 썸네일이 텍스트만 (OG 없음)
- 인스타 프로필 사진 만들 시간 없음
- 변호사 친구한테 약관 만들어달라 부탁 (...답장 없음)
- 누가 방문하는지 모름 (Analytics 없음)
- 구글에서 검색했는데 안 나옴 (Search Console 등록 안 함)
- ...

이거 한 항목씩 검색해서 해결하면 1주 깎입니다. 한 곳에 정리.

---

## 12-Item Pre-Launch Checklist

| # | 항목 | 빠뜨리면 | 코드/템플릿 |
|---|------|----------|-------------|
| 1 | **Mobile hamburger menu** | 모바일 사용자 페이지 끝까지 스크롤 | [components/mobile-hamburger.html](components/mobile-hamburger.html) |
| 2 | **Privacy / Terms / Refund** (한국 PIPA·전자상거래법) | 강의·SaaS 결제 시 법적 문제 | [legal/](legal/) |
| 3 | **OG image** (카톡·페이스북·X 썸네일) | 공유했는데 썸네일 없음 | [components/og-image-generator.py](components/og-image-generator.py) |
| 4 | **Favicon 풀세트** (SVG/ICO/PNG 6사이즈) | 탭에 지구 아이콘 | [components/favicon/](components/favicon/) |
| 5 | **Microsoft Clarity** (heatmap+세션 녹화, 무료 무제한) | 누가 어디서 이탈하는지 모름 | [analytics/clarity.html](analytics/clarity.html) |
| 6 | **Google Search Console + sitemap** | 구글 검색에 안 나옴 | [seo/](seo/) |
| 7 | **JSON-LD Organization** (구조화 데이터) | 검색 결과에 로고 안 뜸 | [seo/jsonld-organization.json](seo/jsonld-organization.json) |
| 8 | **Brand 404 page** | 잘못된 URL 입력 시 Vercel 기본 페이지 | [components/404.html](components/404.html) |
| 9 | **`prefers-reduced-motion`** (접근성) | 모션 민감 사용자 어지러움 | [components/a11y.css](components/a11y.css) |
| 10 | **App Store + Google Play badge** | 앱 출시했는데 다운로드 버튼이 텍스트 링크 | [components/app-store-badge.html](components/app-store-badge.html) |
| 11 | **`canonical` link + `robots` meta** | SEO 중복 콘텐츠 페널티 | 모든 페이지 `<head>` |
| 12 | **`claude.md` 잘 작성** (Claude가 미친 짓 안 하게) | "왜 이걸 다 리팩토링했어?" 발생 | [claude.md](claude.md) |

---

## 빠르게 시작하기

```bash
git clone https://github.com/[your-org]/launch-kit.git
cd your-project
# 필요한 폴더만 골라서 복사
cp -r launch-kit/legal ./
cp -r launch-kit/components ./
cp launch-kit/claude.md ./
```

각 폴더의 README에 customize 가이드.

---

## 컨트리뷰션

본인이 launch 직전에 깨달은 함정 추가 환영. PR 또는 issue로.

---

## 만든 사람

[verbiolabs.com](https://verbiolabs.com) 운영. SpeakCoach AI · TopikIQ · 식빵영어.

이 repo는 verbiolabs.com 만들면서 부딪힌 함정 12개를 정리한 것입니다.
사이트 자체도 100% Claude Code로 만들었고, [코드 전과정 공개](https://github.com/JacobanXXX/verbio-labs).

질문·피드백: [Threads @verbiolabs](https://threads.net/@verbiolabs)

---

## License

MIT. 자유롭게 가져다 쓰세요. attribution 환영하지만 강제 X.
