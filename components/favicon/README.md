# Favicon set — drop-in template

> 모든 모던 브라우저·iOS·Android 호환 풀세트.
> SVG 우선 + PNG 폴백 + ICO 레거시 호환.

⚠️ **이건 Verbio Labs 브랜드 마크 예시입니다.** 본인 브랜드 마크로 교체해서 사용하세요.

## 포함 파일

| 파일 | 용도 |
|---|---|
| `favicon.svg` | 모든 모던 브라우저 (벡터, 어떤 사이즈에서도 선명) |
| `favicon.ico` | IE·레거시 폴백 (16/32/48 멀티 해상도) |
| `favicon-16.png` | 작은 탭 아이콘 |
| `favicon-32.png` | 일반 탭 아이콘 |
| `favicon-180.png` | iOS 홈화면 추가 (Apple Touch Icon) |
| `favicon-192.png` | Android |
| `favicon-512.png` | PWA / 고해상도 |

## HTML에 추가할 코드

`<head>` 안에 다음을 통째로 붙여넣으세요:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png">
<meta name="theme-color" content="#1d1d1f">
```

## 본인 브랜드로 교체하는 법

### 옵션 A: SVG 직접 편집

`favicon.svg`는 100×100 viewBox 단순 SVG입니다. 본인 마크 path로 교체:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="22" ry="22" fill="#YOUR_BRAND_COLOR"/>
  <!-- 본인 마크 path 여기에 -->
</svg>
```

### 옵션 B: 온라인 툴 사용

1. 본인 로고 PNG (1024×1024 권장) 준비
2. https://realfavicongenerator.net 또는 https://favicon.io 에 업로드
3. 받은 ZIP 파일 풀어서 이 폴더 파일들 교체

### 옵션 C: PIL로 직접 생성

`components/og-image-generator.py`와 같은 방식으로 PIL 스크립트로 생성 가능.
verbiolabs.com이 사용한 스크립트 → [github.com/JacobanXXX/verbio-labs](https://github.com/JacobanXXX/verbio-labs) (`make_favicon.py` 참고)

## 검증

배포 후 다음 URL이 200 OK 응답하는지 확인:
- `https://yourdomain.com/favicon.svg`
- `https://yourdomain.com/favicon.ico`
- `https://yourdomain.com/favicon-180.png`

브라우저 캐시 강력 새로고침(`⌘+Shift+R`) 또는 시크릿 창에서 확인.
