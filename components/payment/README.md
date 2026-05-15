# Payment Integration Snippets

> 한국 PG 3종의 통합 코드 샘플.
> 각 파일에 프론트엔드 + 백엔드 가이드 + 검증 로직 포함.

## 파일

| 파일 | PG | 통합 방식 |
|---|---|---|
| [tosspayments.html](tosspayments.html) | 토스페이먼츠 | Payment Widget (모던, JS SDK) |
| [portone.html](portone.html) | 포트원 V2 | Browser SDK (멀티 PG 라우팅) |
| [inicis.html](inicis.html) | KG 이니시스 | Standard 결제창 (form POST) |

## 공통 주의사항

⚠️ 모든 결제 통합에서 **반드시 백엔드 검증** 필요:
1. 프론트에서 결제 완료 → 백엔드 API 호출
2. 백엔드가 PG API로 **실제 결제 정보 재확인**
3. 금액 일치 검증 (위변조 방지)
4. 본인 DB에 저장

프론트만 믿으면 → 사용자가 DevTools로 금액 조작 가능 → 0원 결제 사기

## 본인 가맹점 정보 입력

각 파일의 다음 변수를 본인 정보로 치환:
- 토스페이먼츠: `clientKey` (콘솔 → 결제연동)
- 포트원: `STORE_ID`, `CHANNEL_KEY_*` (콘솔 → 결제연동)
- 이니시스: `mid`, `signKey` (가맹점 가입 시 받음)

## 필요한 백엔드 endpoint

| Endpoint | 역할 | PG |
|---|---|---|
| `/payment/success` | 결제 성공 후 redirect 받기 | 모두 |
| `/payment/fail` | 결제 실패 redirect | 모두 |
| `/api/payment/verify` | PG에 결제 검증 API 호출 | 모두 |
| `/api/payment/cancel` | 환불 처리 | 모두 |
| `/api/webhook/payment` | 비동기 결제 결과 (가상계좌 입금 등) | 모두 |
| `/api/payment/inicis/prepare` | 이니시스 signature 생성 | 이니시스만 |

## 추천 라이브러리 (백엔드)

- **토스페이먼츠**: 공식 SDK 없음, fetch 직접 호출 (간단함)
- **포트원**: `@portone/server-sdk` (TypeScript 우선)
- **이니시스**: 공식 SDK 없음, crypto + form-urlencoded 직접 처리

## 개발 환경 테스트

각 PG는 **테스트 모드 키** 제공 (실제 결제 X):
- 토스페이먼츠: `test_ck_*`로 시작하는 키 사용
- 포트원: 콘솔에서 "테스트 모드" 토글
- 이니시스: `mid=INIpayTest` 사용 (모든 결제 자동 성공)

## 운영 환경 전환 체크리스트

- [ ] 테스트 키 → 운영 키로 교체
- [ ] 결제 성공 webhook URL을 https://본인도메인/... 로 PG 콘솔에 등록
- [ ] 환불 처리 API 동작 확인
- [ ] 영수증·세금계산서 발행 절차 확인
- [ ] 결제 정보 본인 DB 스키마 설계 (paymentId, amount, status, refundedAt)
- [ ] 분쟁 처리 절차 문서화
