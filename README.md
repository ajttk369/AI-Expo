# AI Future Expo 2026

AI 기술 전시회를 콘셉트로 제작한 반응형 홍보 웹사이트입니다. 전시 소개, 기술 상세 페이지, 참가기업 안내, 티켓 예매, 오시는 길까지 하나의 정적 웹사이트로 구성했습니다.

- Live Site: https://ai-expo-sooty.vercel.app/
- Deployment: Vercel
- Type: Static website

## Preview

### Desktop

![AI Future Expo desktop home](docs/screenshots/home-desktop.png)

### Mobile

![AI Future Expo mobile home](docs/screenshots/home-mobile.png)

### Technology Detail

![Technology detail page](docs/screenshots/tech-detail.png)

### Exhibitor Directory

![Exhibitor directory page](docs/screenshots/exhibitors.png)

## Project Scope

- 메인 랜딩 페이지 UI/UX 구성
- 모바일/태블릿/데스크톱 반응형 레이아웃
- 한국어/영어 언어 전환
- 기술별 상세 페이지 6종 제작
- 기술 프리뷰 영상 영역 구현
- 참가기업 디렉터리, 필터, 검색, 저장 기능
- 티켓 예매 페이지와 오시는 길 페이지 구성
- 파비콘, iOS/Android 홈 화면 아이콘 적용
- Vercel 정적 배포 설정

## Video Production

사이트에 포함된 메인 영상과 기술별 프리뷰 영상은 Adobe Premiere Pro와 Adobe After Effects를 사용해 직접 편집했습니다.

- 메인 홍보 영상: `videos/main-preview-updated.mp4`
- 기술별 영상: 한국어/영어 버전 분리 제공
- 각 기술 페이지에서 선택된 언어에 따라 대응되는 영상으로 전환
- 한국어 선택 시 한국어 자막과 한국어 나레이션 영상 재생
- 영어 선택 시 영어 자막과 영어 나레이션 영상 재생
- 썸네일 이미지는 기술별 분위기에 맞춰 별도 제작

## Pages

| File | Description |
| --- | --- |
| `index.html` | 메인 페이지 |
| `tech-ai-medical.html` | AI Medical 상세 |
| `tech-robotics.html` | Robotics 상세 |
| `tech-smart-city.html` | Smart City 상세 |
| `tech-future-device.html` | Future Device 상세 |
| `tech-mobility.html` | Mobility 상세 |
| `tech-cyber-ai.html` | Cyber AI 상세 |
| `exhibitors.html` | 참가기업 페이지 |
| `ticket.html` | 티켓 예매 페이지 |
| `directions.html` | 오시는 길 페이지 |

## Structure

```text
.
├── docs/
│   ├── project-plan.md  # 프로젝트 기획 및 구현 정리
│   └── screenshots/     # README용 실제 화면 캡처
├── images/              # 페이지 이미지, 영상 썸네일, 앱 아이콘
├── scripts/
│   ├── main.js          # 메인 페이지 인터랙션
│   └── tech-detail.js   # 기술 상세 페이지 데이터와 인터랙션
├── styles/
│   ├── main.css         # 메인 페이지 스타일
│   └── tech-page.css    # 기술 상세 공통 스타일
├── videos/              # 메인 및 기술별 프리뷰 영상
├── index.html           # Vercel 진입 파일
├── site.webmanifest     # 모바일 홈 화면 아이콘 설정
└── vercel.json          # Vercel 정적 배포 설정
```

## Tech Notes

- 별도 빌드 과정 없이 실행되는 정적 HTML/CSS/JavaScript 구조입니다.
- 메인 페이지의 스타일과 스크립트는 유지보수를 위해 `styles/main.css`, `scripts/main.js`로 분리했습니다.
- 기술 상세 페이지는 `styles/tech-page.css`, `scripts/tech-detail.js`를 공유해 중복을 줄였습니다.
- 주요 모달, 저장 버튼, 언어/탭/비교 버튼에는 키보드 조작과 보조기술 상태 전달을 고려한 접근성 속성을 적용했습니다.
- 영상 경로는 로컬 파일 실행과 Vercel 배포 환경 모두에서 동작하도록 상대 경로를 사용했습니다.

## Deployment

GitHub 저장소에 푸시한 뒤 Vercel에서 해당 저장소를 Import하면 됩니다. 빌드 명령어는 필요 없습니다.

```bash
git add -A
git commit -m "Prepare final AI expo site"
git push
```

## Asset Note

영상 파일은 GitHub의 권장 용량인 50MB를 넘을 수 있습니다. 현재 구조로도 배포는 가능하지만, 장기 운영 프로젝트라면 Git LFS 또는 외부 영상 호스팅 사용을 권장합니다.
