# Analytics — 누가 어떻게 사이트를 쓰는지 알기

> 출시 전엔 "누가 안 와요"라고 추측만 하면 안 됨. 데이터 기반.

## 추천: Microsoft Clarity (무료, 무제한)

GA4보다 강력한 점:
- **세션 녹화** (사용자가 실제로 어떻게 클릭·스크롤했는지 영상 재생)
- **히트맵** (어디 가장 많이 클릭됨, 어디서 멈춤)
- **Rage Click 감지** (사용자가 화나서 막 클릭한 곳 = UX 문제)
- **무료 + 무제한**

설치: [`clarity.html`](clarity.html) 참고. 5분 작업.

## Google Analytics 4 (대안)

- 무료지만 학습 곡선 가파름
- 개인정보 수집 → **쿠키 동의 배너 필수** (한국 PIPA·EU GDPR)
- 산업 표준이라 호환성 좋음

→ 인디 메이커 첫 사이트라면 **Clarity 단독으로 충분**.

## 한국 PIPA 준수 체크

Clarity는 사용자 행동 데이터를 Microsoft 서버에 전송함.
→ 본인 사이트 **개인정보처리방침**에 다음 명시 필수:

```
제5조 (개인정보 처리의 위탁)

| 수탁업체 | 위탁 업무 |
|---|---|
| Microsoft Corporation (Microsoft Clarity) | 웹사이트 이용 행태 분석 (히트맵, 세션 기록을 통한 UX 개선) |

※ Microsoft Clarity의 처리 정책은 Microsoft 개인정보처리방침
  (privacy.microsoft.com)을 따릅니다.
  이용자는 브라우저 쿠키 설정으로 행태정보 수집을 거부할 수 있습니다.
```

→ [`legal/privacy.html.template`](../legal/privacy.html.template)에 이미 포함되어 있음.
