# 포트원 (PortOne, 구 아임포트) 약관 추가본

> {{COMPANY_LEGAL_NAME_SHORT}}이 포트원을 PG로 사용 시 추가할 약관 항목.
> 포트원은 multi-PG 라우팅 도구이므로 실제 카드사 처리는 NHN KCP·KSNET·다날 등 백엔드 PG가 담당합니다.

## 📋 개인정보처리방침 — 처리 위탁 표 추가

기존 [`privacy.html`](../privacy.html) 제5조 표에 다음 추가:

```html
<tr>
  <td>주식회사 코드앤택트 (PortOne)</td>
  <td>전자결제 라우팅·승인·취소 처리</td>
</tr>
<tr>
  <td>각 백엔드 PG사 (NHN KCP, KSNET, 다날 등)</td>
  <td>실제 결제 승인 및 자금 정산</td>
</tr>
```

> 💡 본인이 사용하는 백엔드 PG 1-2개만 명시해도 됩니다 (전체 X).

## 📋 이용약관 — 결제 조항 보강

```html
<li>회사는 결제대행 라우팅 서비스로 <strong>포트원(PortOne)</strong>을 이용하며, 실제 결제 처리는 포트원이 연동하는 PG사(NHN KCP, KSNET, 다날 등)에서 이루어집니다.</li>
<li>이용자가 선택한 결제수단에 따라 백엔드 PG사가 자동으로 라우팅되며, 각 PG사의 약관과 처리 기간이 적용됩니다.</li>
<li>결제 정보 (카드번호 등)는 포트원 또는 백엔드 PG사가 직접 처리하며, 회사는 결제 민감 정보를 저장하지 않습니다.</li>
```

## 📋 환불 정책 — PG 라우팅 안내

```
환불 처리 기간은 결제 시 자동 라우팅된 백엔드 PG사 정책을 따릅니다.

- 신용카드 (백엔드: NHN KCP / KSNET 등): 영업일 기준 3-7일
- 가상계좌: 영업일 기준 3일
- 간편결제 (카카오페이/네이버페이/토스): 영업일 기준 1-3일

상세 처리 일정은 포트원 콘솔에서 확인 가능하며, 지연 시 회사가 이용자에게 안내합니다.
```

## 🛡 보안 안내

```
- 카드 정보 입력은 포트원이 호스팅하는 결제창에서 직접 이루어지며, 회사 서버에는 일체 전달·저장되지 않습니다.
- 포트원과 백엔드 PG사 모두 PCI-DSS 또는 동등한 보안 인증을 보유합니다.
```

## 🔌 결제 코드 샘플

코드 예시 → [`components/payment/portone.html`](../../components/payment/portone.html)

## 📎 포트원 공식 자료

- 약관: https://portone.io/korea/ko/terms
- 개인정보처리방침: https://portone.io/korea/ko/privacy
- 개발자 문서: https://developers.portone.io
- 사용 PG 목록: https://developers.portone.io/docs/ko/sdk/v1-sdk/payrequest/intro

## ⚠️ 면책

- 백엔드 PG사가 변경되면 약관도 업데이트 필수
- 본격 매출 발생 전 변호사 1회 검토 권장
