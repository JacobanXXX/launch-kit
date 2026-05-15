# Threads 포스트 카피 — Launch Kit 홍보용

> 같은 자료, 다른 후크. 각각 1주일 간격으로 올려서 A/B 테스트.
> 댓글에 GitHub 링크 / 본문은 후크에 집중.

---

## 🎯 메인 포스트 (1순위)

**Hook A — 함정 발견 톤**

```
Claude Code로 SaaS 사이트 만드는데 30분이면 끝남.

근데 출시 가능한 상태까지 가는 데는 또 1주.

까먹기 쉬운 12가지 정리해서 GitHub에 풀어둠.
한국 PIPA·전자상거래법 호환 약관 템플릿,
Microsoft Clarity 설치 (개인정보처리방침 disclosure 포함),
모바일 햄버거 메뉴 코드,
OG 이미지 자동 생성 스크립트까지 — 다 copy-paste.

링크는 댓글 👇
```

**Hook B — 회고 톤**

```
verbiolabs.com 만들면서 출시 직전에 발견한 함정 12개.

- 모바일 메뉴가 사라짐
- 카톡 링크 썸네일이 텍스트만
- 검색에 안 나옴
- 누가 방문하는지 모름
- 잘못된 URL 입력 시 Vercel 에러 페이지

다음 인디 메이커가 같은 시간 안 깎이게 GitHub에 정리.
한국 SaaS 만드는 사람한테 특히 유용 (전자상거래법 약관 템플릿 포함).
```

**Hook C — 직접적 가치 제안**

```
Claude Code 쓰는 인디 메이커한테 선물:

✓ 한국 PIPA 호환 약관 3종 (privacy/terms/refund)
✓ 모바일 햄버거 메뉴 (HTML+CSS+JS 통째로)
✓ Microsoft Clarity 설치 가이드
✓ Google Search Console 셋업
✓ 1200×630 OG 이미지 자동 생성기
✓ 브랜드 404 페이지
✓ Favicon 풀세트 (SVG/ICO/PNG 6사이즈)
✓ 접근성 기본기 (prefers-reduced-motion 등)
✓ Apple/Google Play badge 정확한 SVG
✓ Universal claude.md 템플릿

한 곳에 묶었음. 떠가서 쓰세요.
```

---

## 🔥 Follow-up 포스트 (2주차)

**Hook D — 단일 항목 deep dive**

```
모바일 햄버거 메뉴 코드 안 짜는 이유:

1. 시간 없어서
2. 어떻게 짜는지 매번 까먹음  
3. 결국 출시 직전 panic하면서 stack overflow 검색

verbiolabs.com에 쓴 햄버거 메뉴 코드 그대로 풀었음.
HTML 30줄 + CSS 80줄 + JS 15줄. 끝.
ESC 키 닫기, 클릭 시 자동 스크롤, body scroll lock 까지.

[GitHub 링크]
```

**Hook E — claude.md 단독**

```
Claude Code 200번 커밋하면서 다듬은 claude.md 공개.

핵심 룰:
1. 최소 변경 원칙 (옆 코드 임의 리팩토링 금지)
2. 큰 변경 전 plan 출력 후 confirm
3. 새 dependency 함부로 추가 X
4. 테스트 후에만 완료 표시
5. Production 환경변수·결제·DB 변경 시 stop and ask

각 룰마다 왜 필요한지 실패 사례 첨부했음.

본인 .cursorrules / claude.md에 그대로 복붙 가능.
```

**Hook F — 한국 specific 가치**

```
한국에서 SaaS 출시하려면 약관 3종이 법적 필수:

1. 개인정보처리방침 (개인정보보호법 30조)
2. 이용약관 (전자상거래법)
3. 환불·청약철회 정책 (전자상거래법 17조)

변호사한테 부탁하면 50만원~. AI한테 시키면 또 검토 시간.

verbiolabs.com 만들면서 작성한 3종 템플릿 GitHub에 풀었음.
회사명·이메일·도메인만 바꾸면 됨. 사용 무료.

⚠️ 강의·결제 본격 시작 전엔 변호사 검토 1번 추천 (그래도 0에서 시작하는 것보다 훨씬 빠름)
```

---

## 🍒 메타 컨텐츠 (3주차)

**Hook G — 제작 후일담**

```
Claude Code로 verbiolabs.com 만들기 전과정:

Day 1: HTML 1개로 시작 (Vercel 배포)
Day 2: 모바일에서 메뉴가 사라진 것 발견 → 햄버거 추가
Day 3: 카톡 공유했는데 썸네일이 텍스트만 → OG 이미지 추가
Day 4: 약관 3종 작성 (한국 PIPA 호환)
Day 5: 분석 도구 설치 (Microsoft Clarity)
Day 6: SEO 풀세트 (sitemap, JSON-LD)
Day 7: 출시 + Threads 공유

각 day 마다 마주친 함정 + 해결 코드 GitHub에 정리했음.
```

**Hook H — 비용 공개**

```
Claude Code로 SaaS 사이트 만드는데 든 비용:

- 도메인 (verbiolabs.com): 12,000원/년
- Vercel hosting: 0원 (무료 티어)
- Microsoft Clarity: 0원 (무료 무제한)
- Google Search Console: 0원
- 약관 작성: 0원 (Claude로 생성)
- 디자인: 0원 (Claude + Instrument Serif 무료 폰트)

총 12,000원/년 + Claude API 사용량 (~5만원).

이 정도면 인디 메이커가 시도 못 할 이유 없음.
사이트 만들면서 정리한 launch-kit GitHub에 풀어둠.
```

**Hook I — 반응형 후크 (질문 유도)**

```
질문:

"Claude Code로 만들었는데 출시 직전에 가장 많이 빠뜨린 게 뭐였어요?"

내 답: 모바일 햄버거 메뉴 (3번 다 까먹음 ㅋㅋㅋ)

verbiolabs.com 만들면서 12개 함정 정리해서 GitHub에 풀었음.
본인이 마주친 함정 추가해주실 분 PR 환영.
```

**Hook J — 권위 톤 (5년 경험 강조)**

```
5년간 SaaS 만들고, 200+ 엔지니어 가르치면서
"인디 메이커가 매번 같은 함정에 빠지는구나" 생각.

verbiolabs.com 만들면서 그 함정 12개 정리해서 GitHub에 공개:

- 한국 PIPA·전자상거래법 호환 약관 3종
- 모바일 햄버거 메뉴 (HTML+CSS+JS)
- Microsoft Clarity 설치 + 개인정보 disclosure
- OG 이미지 자동 생성 (Python)
- Universal claude.md 템플릿
- ...

다음 인디 메이커가 시간 안 깎이길.
```

---

## 📌 사용 가이드

1. **Hook A 또는 B** 부터 시작 (가장 viral 가능성 높음)
2. 1주 간격으로 follow-up (Hook D · E · F 순서)
3. 댓글이 좋으면 메타 컨텐츠 (Hook G · H · I) 추가
4. 권위 톤 (Hook J) 은 마지막에 — 너무 일찍 쓰면 자기자랑처럼 보임

각 포스트마다:
- 본문 200자 이내 (Threads 기본 한도 500자지만 짧을수록 reach)
- 댓글에 GitHub 링크 (본문에 링크 넣으면 알고리즘 페널티)
- 첫 댓글에 "구독·DM 환영" 식의 친근한 톤

---

## 🖼 첨부 이미지 (있으면 reach +30%)

추천:
- launch-kit GitHub repo 스크린샷 (12개 항목 표 보이는)
- 또는 verbiolabs.com 모바일 햄버거 작동 영상 (10초 GIF)
- 또는 OG 이미지 자체 (verbiolabs OG)

---

## 마지막 팁

- Threads는 **저녁 8-10시 / 출퇴근 7-8시**에 reach 좋음
- 한국 인디 씬 활성 계정 5명 정도 미리 mention 안 한 채로 그냥 follow → 알고리즘이 알아서 노출
- 1주일 후 "이 포스트 반응 어떠셨나요?" follow-up post → engagement rate 높임
