# Legal Templates

> 한국 PIPA·전자상거래법 호환 약관 3종.
> ⚠️ 강의·결제 본격 시작 전엔 변호사 1회 검토 추천.

## 사용법

각 `.html.template` 파일을 본인 도메인으로 옮긴 후, 아래 변수를 본인 정보로 치환하세요:

| 변수 | 예시 | 설명 |
|------|------|------|
| `{{COMPANY_BRAND}}` | Verbio Labs | 브랜드명 (영문) |
| `{{COMPANY_LEGAL_NAME}}` | 식빵영어 (Sikbang English) | 사업자등록상 상호 |
| `{{COMPANY_LEGAL_NAME_SHORT}}` | 식빵영어 | 짧은 상호 |
| `{{COMPANY_BRAND_ALT}}` | Sikbang English | 보조 브랜드명 |
| `{{DOMAIN}}` | verbiolabs.com | 도메인 |
| `{{REPRESENTATIVE_NAME}}` | 안준영 (Jacob) | 대표자명 (영문 병기) |
| `{{REPRESENTATIVE_NAME_KR}}` | 안준영 | 대표자명 (한글) |
| `{{CONTACT_EMAIL}}` | hello@example.com | 고객·개인정보 보호책임자 이메일 |
| `{{BUSINESS_ADDRESS}}` | 서울특별시 강남구 ... | 사업장 주소 |
| `{{BUSINESS_REG_NUMBER}}` | 123-45-67890 | 사업자등록번호 |
| `{{ECOMMERCE_REG_NUMBER}}` | 제 2026-서울강남-0001호 | 통신판매업 신고번호 (필수) |
| `{{GOOGLE_VERIFICATION_CODE}}` | ABC123... | Google Search Console 인증 코드 |
| `{{CLARITY_PROJECT_ID}}` | xxxxxxxxxx | Microsoft Clarity 프로젝트 ID |

### macOS / Linux 일괄 치환 예시

```bash
sed -i '' 's/{{COMPANY_BRAND}}/MyStartup/g' privacy.html
sed -i '' 's/{{DOMAIN}}/mystartup.com/g' privacy.html
# ... 반복
```

또는 Python:
```python
content = open('privacy.html.template').read()
content = content.replace('{{COMPANY_BRAND}}', 'MyStartup')
content = content.replace('{{DOMAIN}}', 'mystartup.com')
# ...
open('privacy.html', 'w').write(content)
```

## 포함된 약관

- **privacy.html.template** — 개인정보처리방침 (개인정보보호법 30조 12개 섹션)
- **terms.html.template** — 이용약관 (전자상거래법 호환 14개 조항)
- **refund.html.template** — 환불·청약철회 정책 (전자상거래법 17조 + 콘텐츠산업진흥법)

## ⚠️ 면책

이 템플릿은 일반적인 한국 SaaS 운영 기준으로 작성됨.
본인 비즈니스 모델(B2B, 구독, 일회성 결제, 디지털 콘텐츠 등)에 따라 추가 조항 필요할 수 있음.
실제 결제·강의 판매 전 변호사 1회 검토 권장.
