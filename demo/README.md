# Live Demo

이 폴더는 launch-kit의 라이브 데모 사이트입니다.

## 배포 방법 (Vercel — 추천, 무료, 5분)

### 옵션 A: Vercel 대시보드 (가장 쉬움)

1. https://vercel.com/new 접속
2. **Import Git Repository** → JacobanXXX/launch-kit 선택
3. **Configure Project**:
   - Framework Preset: **Other**
   - Root Directory: `demo`
   - Build Command: (비워두기)
   - Output Directory: `./` (또는 비워두기)
4. **Deploy** 클릭 → 30초 후 `launch-kit-xxx.vercel.app` URL 받음

### 옵션 B: Custom Domain 연결

배포 후:
1. Vercel 프로젝트 → Settings → Domains
2. `launch-kit.verbiolabs.com` 입력
3. CNAME 레코드 자동 안내 → 도메인 DNS에 추가
4. 5분 내 SSL 자동 발급

### 옵션 C: GitHub Pages (Vercel 대신)

1. Repo → Settings → Pages
2. Source: `main` branch, `/demo` folder
3. Save → 1-2분 후 `JacobanXXX.github.io/launch-kit/` 활성화

## 로컬 미리보기

```bash
cd demo
python3 -m http.server 8000
# → http://localhost:8000 열기
```

## iframe 데모 작동 원리

`raw.githack.com`을 사용해 GitHub의 raw HTML을 직접 iframe에서 렌더링.

- raw.githack.com URL 형식: `https://raw.githack.com/USER/REPO/BRANCH/PATH`
- 캐시: 약 5분 (GitHub push 후 5분 후 반영)

## 라이브 URL (배포 후)

- https://launch-kit.verbiolabs.com (custom domain 연결 시)
- https://launch-kit-xxx.vercel.app (Vercel 기본 URL)

## 업데이트

`demo/index.html` 수정 후 commit + push → Vercel 자동 재배포.

## 구조

```
demo/
├── index.html      ← 메인 데모 페이지
└── README.md       ← 이 파일
```

추후 추가 가능:
- `playground.html` — 실시간 변수 입력 → 약관 즉시 미리보기
- `og-generator.html` — 브라우저에서 OG 이미지 생성 (Python 없이)
- `claude-md-builder.html` — claude.md 인터랙티브 빌더
