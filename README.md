# FW (First Workout)

🔗 배포 링크: **https://d0minseok.github.io/fw/**

운동을 처음 접하는 분들을 위한 웹앱입니다. 운동 종목을 부위·난이도별로 소개하고, 운동에 도움이 되는 용품을 큐레이션으로 추천합니다.

- 운동 가이드: 부위(상체/하체/코어/유산소/스트레칭)와 난이도로 필터링해 운동 방법과 초보자 팁을 확인
- 용품 추천: 홈트/헬스장/러닝/요가 용품을 카테고리별로 큐레이션 (현재는 구매 링크 없이 정보만 제공)

## 기술 스택

- [Vite](https://vite.dev/) + [React](https://react.dev/)
- [React Router](https://reactrouter.com/) (HashRouter — GitHub Pages에서 별도 설정 없이 동작)
- 정적 데이터 파일 (`src/data`) — 백엔드/DB 없음
- 순수 CSS (CSS 변수 기반, 모바일 우선 반응형)

## 로컬에서 실행하기

```bash
npm install
npm run dev
```

프로덕션 빌드를 미리 확인하려면:

```bash
npm run build
npm run preview
```

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드 후 GitHub Pages에 배포합니다. 저장소 Settings → Pages → Source를 "GitHub Actions"로 설정해야 합니다.

배포 URL: https://d0minseok.github.io/fw/

> `vite.config.js`의 `base` 값은 저장소 이름(`fw`)과 정확히 일치해야 합니다. 저장소 이름을 바꾸면 `base` 값도 함께 수정하세요.

## 데이터 추가하기

새로운 운동이나 용품은 `src/data/exercises.js`, `src/data/products.js`에 항목을 추가하면 됩니다. 별도의 코드 수정 없이 데이터만 추가해도 목록·상세 페이지에 자동으로 반영됩니다.

## 디자인 출처

홈 화면은 Figma(`figma.com/design/KCKcbYSE5xR73ezrmXMK3B`)에서 만든 디자인을 기반으로 구현했습니다. 사진·아이콘 에셋은 해당 Figma 파일에서 내보낸 것을 그대로 사용했습니다.

## 면책 문구

본 콘텐츠는 일반적인 정보 제공을 목적으로 하며, 전문가의 운동 지도나 의학적 조언을 대체하지 않습니다.
