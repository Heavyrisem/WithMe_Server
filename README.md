# WithMe_Server

개발목록
* 인공지능 모델 추가
* RESTful API
* 이미지 전송받고 처리

## 개발일지

uvicorn main:app --reload

docker build -t TARGET .

docker run TARGET -p 3001:3001

docker withme save -o wmserver.tar

docker load -i wmserver.tar


nc -l PORT > wmserver.tar

pv wmserver.tar | nc SERVERIP PORT

https://itholic.github.io/docker-copy/

### 5.24
FastAPI 기본코드 알아보기

### 5.27
Nginx Loadbalance 서버 구축

### 6.4
서버 API 이름 변경, OCR 테스트 API 추가

### 6.7
Google Cloud Vision API 추가 (OCR)

### 6.17
Google Cloud Speech To Text API 추가 (TTS)

### 8.18
API v2 추가, 배포