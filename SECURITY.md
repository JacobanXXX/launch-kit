# Security Policy

## 지원 버전

| Version | Supported          |
|---------|--------------------|
| 1.x     | :white_check_mark: |

## 취약점 신고

이 repo는 정적 템플릿 모음이라 일반적인 SaaS와 비교해 공격 표면이 작지만, 그래도 보안 이슈 발견 시:

### 어떤 게 보안 이슈인가요?

- ⚠️ 약관 템플릿에 PII 노출 가능 코드
- ⚠️ XSS 가능 코드 (mobile-hamburger.html 등)
- ⚠️ Microsoft Clarity 설치 시 의도치 않은 데이터 수집
- ⚠️ 의존하는 외부 스크립트 변조 가능성

### 신고 방법

**공개 issue 대신 비공개로 신고해주세요:**

- Email: hello@verbiolabs.com
- 제목: `[SECURITY] launch-kit — [짧은 설명]`
- 본문: 재현 방법, 영향 범위, 가능하면 PoC

24시간 내 회신 드립니다.

### 응답 절차

1. 24시간 내 접수 확인
2. 7일 내 영향도 분석 + 패치 우선순위 결정
3. 30일 내 패치 배포 (CVE 발급 시 협업)
4. 신고자 명의 (희망 시) credit 표시

### 면책 안내

이 repo의 약관 템플릿은 일반적 한국 SaaS 운영 기준 참고 자료이며, 변호사 검토를 대체하지 않습니다.
약관 사용으로 인한 법적 분쟁은 사용자 책임입니다.

LICENSE 파일 ([MIT](LICENSE)) 참고.
