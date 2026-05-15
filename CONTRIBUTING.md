# Contributing to Launch Kit

본인이 SaaS 출시 직전에 마주친 함정 추가 환영합니다.
**작은 PR도 큰 도움**이 됩니다.

## 🎯 어떤 contribution이 좋은가?

좋은 예시:
- ✅ 새로운 launch 직전 함정 + 해결 코드 (예: "이메일 템플릿이 카카오톡에서 깨짐")
- ✅ 기존 템플릿의 버그 수정
- ✅ 한국 specific 케이스 추가 (예: "PortOne 결제 약관 예시")
- ✅ 다른 프레임워크 변형 (예: Next.js, Vite, Astro)
- ✅ 영문 번역
- ✅ 오타·문법 수정
- ✅ FAQ 추가

❌ 이런 건 자제:
- 본인 제품 광고 (Made with section은 OK)
- 외부 유료 도구 일방적 추천
- 한국 법령 자의적 해석 변경 (변호사 자문 첨부 시 OK)

## 🚀 Quick start

```bash
# 1. Fork this repo (GitHub 우상단 Fork 버튼)

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/launch-kit.git
cd launch-kit

# 3. Create a new branch
git checkout -b add/new-component-name

# 4. Make your changes

# 5. Commit
git add .
git commit -m "Add: [component name]"

# 6. Push
git push origin add/new-component-name

# 7. Open PR on GitHub
```

## 📐 코드 스타일

- **HTML/CSS**: 들여쓰기 2 spaces, 가능한 한 vanilla (라이브러리 의존 X)
- **JS**: ES6+, no transpilation, 화살표 함수
- **Python**: PEP8, type hints 권장
- **Markdown**: 한국어/영어 자유롭게 (가능하면 양쪽)

## 🧪 테스트

코드 변경 시:
- [ ] 모바일 뷰포트(375px)에서 한 번 확인
- [ ] 콘솔 에러 0개
- [ ] 변수 치환 가이드가 README에 있나
- [ ] 이미지 alt 또는 SVG aria-label

## 🏛️ Legal contribution 가이드

**약관·법령 관련 PR은 특별 주의:**

- 한국 법령 변경 반영 시 → 출처 링크 필수 (법제처 등)
- 영문 번역 시 → 원문 의도 보존 우선
- 새로운 법적 권고 추가 시 → 변호사 검토 자료 첨부 권장

⚠️ 본인이 변호사가 아니라면 약관 텍스트 자체는 수정 자제.
구조·번역·UI 개선은 환영.

## 💬 PR 작성 팁

좋은 PR description:

```markdown
## 변경 내용
[무엇을 바꿨는지 1-2줄]

## 왜 필요한가
[어떤 함정을 해결하는지]

## 테스트
[어떻게 검증했는지]

## 스크린샷 (UI 변경 시)
```

## 🌟 Recognition

모든 contributor는 README에 자동으로 추가됩니다 (또는 `CONTRIBUTORS.md`).

큰 contribution은 별도 mention.

## ❓ 질문 있으면

- GitHub Issue로 자유롭게
- 또는 [Threads](https://threads.net) DM
- Email: hello@verbiolabs.com

작은 contribution도 환영합니다. 오타 수정 PR도 진심으로 감사 🙏
