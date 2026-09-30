# Cardnews Studio

API와 서버 없이 프로젝트 JSON을 열고 편집하고 PNG로 저장합니다.

## GitHub Pages 배포
1. Public 저장소 cardnews-studio 생성
2. 이 폴더 내부 파일을 저장소 최상위에 업로드(index.html이 바로 보여야 합니다).
3. Settings > Pages > Deploy from a branch > main > / (root) > Save
4. 배포 후 표시된 주소로 접속

사진 파일과 로고를 직접 업로드하면 서버 전송 없이 브라우저에서 처리합니다. 원격 기사 사진은 CORS 제한으로 PNG 출력이 차단될 수 있어 파일 업로드를 권장합니다. 프로젝트 JSON을 별도로 저장하면 다른 PC에서 이어 편집할 수 있습니다. 공개 저장소에는 API 키와 작업 프로젝트를 올리지 마세요.

폰트: Pretendard (SIL OFL), PNG 라이브러리: html-to-image (MIT). 라이선스는 vendor에 포함합니다.
