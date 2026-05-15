# 토스페이먼츠 (TossPayments) 약관 추가본

> {{COMPANY_LEGAL_NAME_SHORT}}이 토스페이먼츠를 PG로 사용 시, 기존 약관·개인정보처리방침에 다음 항목을 추가하세요.

## 📋 개인정보처리방침 — 처리 위탁 표 추가

기존 [`privacy.html`](../privacy.html) 제5조 (개인정보 처리의 위탁) 표에 다음 행을 추가:

```html
<tr>
  <td>토스페이먼츠 주식회사</td>
  <td>전자결제 서비스 제공 (신용카드·계좌이체·간편결제)</td>
</tr>
```

## 📋 이용약관 — 결제 조항 보강

기존 [`terms.html`](../terms.html) 제6조 (요금 및 결제) 항목에 다음 추가:

```html
<li>회사는 결제대행사로 <strong>토스페이먼츠 주식회사</strong>를 이용하며, 결제 처리·결제 정보 보관·결제 취소·환불은 토스페이먼츠의 결제 약관 (https://www.tosspayments.com/terms) 을 따릅니다.</li>
<li>이용자는 결제 진행 시 토스페이먼츠가 정한 본인인증 절차에 따라야 하며, 인증 실패 시 결제가 진행되지 않을 수 있습니다.</li>
```

## 📋 환불 정책 — PG별 환불 처리 기간 명시

기존 [`refund.html`](../refund.html) 제6조 (환불 처리 기간) 표에 다음 추가:

| 결제수단 | 환불 처리 기간 |
|---|---|
| 신용카드 (토스페이먼츠) | 영업일 기준 3-5일 (카드사 정책에 따름) |
| 계좌이체 (토스페이먼츠) | 영업일 기준 3일 이내 |
| 간편결제 (토스페이) | 영업일 기준 1-3일 |
| 가상계좌 (토스페이먼츠) | 영업일 기준 3일 이내 |

## 🛡 보안·과세 안내 (이용약관에 추가 권장)

```
- 카드사 명세서에는 회사명이 아닌 "{{COMPANY_LEGAL_NAME_SHORT}}" 또는 "토스페이먼츠/{{COMPANY_BRAND}}"로 표시될 수 있습니다.
- 결제 정보는 토스페이먼츠가 PCI-DSS 인증된 보안 인프라로 직접 처리하며, 회사는 카드번호 등 민감 정보를 일체 저장·열람하지 않습니다.
- 부가가치세는 결제 금액에 포함되어 있으며, 세금계산서가 필요한 경우 {{CONTACT_EMAIL}}로 요청하시면 발행해드립니다.
```

## 🔌 결제 코드 샘플

코드 예시 → [`components/payment/tosspayments.html`](../../components/payment/tosspayments.html)

## 📎 토스페이먼츠 공식 자료

- 약관: https://www.tosspayments.com/terms
- 개인정보처리방침: https://www.tosspayments.com/privacy
- 개발자 문서: https://docs.tosspayments.com
- PCI-DSS 인증: https://www.tosspayments.com/security

## ⚠️ 면책

본 추가본은 일반적인 토스페이먼츠 통합 시나리오 기준입니다.
- 정기결제(빌링) 도입 시 → 별도 약관 추가 필요
- 해외 결제 지원 시 → 외환 관련 조항 추가 필요
- 본격 매출 발생 전 변호사 1회 검토 권장
