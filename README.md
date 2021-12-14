# Itboss
## 프로젝트 소개

- 프론트엔드, 디자이너, 퍼블리셔를 위한 커뮤니티를 만들어 보고 싶었음
- 커뮤니티의 장점은 자유롭게 넣고싶은 기능을 제한없이 마구 개발해도 이상할게 없다고 생각함(심지어 결제 기능까지도 무리가 없다고 생각함)
- 취업시장에서 많이 쓰인다고 생각하는 기술들을 공부하여 실제 프로젝트 도입
- 응슷곰 소개
- 인터넷을 구경다니는 행위를 웹서핑, 싸이월드를 보러다니는 행위를 파도타기라고 부르기에 바다를 배경으로 컨셉을 잡음
- 곰에 공룡옷 입은 컨셉으로 가고싶은데 왜 티라노밖에 없을까? 그래서 지느러미 달린걸로 채택

## 스택
 <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"> <img src="https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/ToastUiEditor-13AFF0?style=for-the-badge&logo=Chakra UI&logoColor=white">

## 회원가입
![회원](https://user-images.githubusercontent.com/80582578/146005344-cf8facc0-255f-47c4-96f4-90be1c291b0a.gif)

- 이메일, 비밀번호, 비밀번호 확인, 닉네임
- 유효성검사: 비밀번호 일치, 회원가입 성공, 이미 존재하는 메일, 그외 관리자 문의
- 닉네임 12자까지 제한

## 로그인
<img width="450" alt="스크린샷 2021-12-14 오후 10 18 19" src="https://user-images.githubusercontent.com/80582578/146005734-56416a45-7813-4de0-b010-da42f954004f.png">

- 로그인 성공
- 유효성검사: 유저를 찾을수없음, 비밀번호가 틀림, 너무 많은 요청

## 헤더
![헤더](https://user-images.githubusercontent.com/80582578/146005910-1a7be918-e22a-4bc5-9413-91bc059a6664.gif)

- 로그인, 회원가입, 메인, 인기, 질문, 소통, 뉴스 라우팅
- 로그인 여부 표시
- 헤더 열기/닫기 표현 (설정 저장됨)
- 로고 애니메이션
- 로고 자체 제작

## 게시판
<img width="730" alt="스크린샷 2021-12-14 오후 10 19 47" src="https://user-images.githubusercontent.com/80582578/146005957-f64f194a-110f-46ce-aef8-89e4edf833e1.png">
<img width="294" alt="스크린샷 2021-12-14 오후 10 21 15" src="https://user-images.githubusercontent.com/80582578/146006193-e22a2b8c-2180-40e2-a09d-d877140412d2.png">
<img width="730" alt="스크린샷 2021-12-14 오후 10 22 31" src="https://user-images.githubusercontent.com/80582578/146006408-245f8b7f-c4ad-4aba-bdf1-4cac08143707.png">
- 리스트에서 제목, 닉네임, 날짜 표현
- 글쓰기 마크다운 에디터
- 게시글 마크다운 뷰어


### 구현 예정이었던 것들
- toastUi에서 이미지 올리며 base64로 올라가는것 고치기
- 게시판 수정, 삭제
- user정보 다양화
- 추천 시스템
- 컴포넌트 최적화
- 검색 시스템
- 메세지 or 채팅 시스템
- 회원가입시 회원정보 리덕스 저장 추가


### 개발 중단 하게된 계기
<img width="924" alt="스크린샷 2021-12-14 오후 9 52 32" src="https://user-images.githubusercontent.com/80582578/146001885-d7d11b38-7007-4b33-afb2-5f2f9587e997.png">
- 개발하면서 잠깐씩 밖에 안만졌는데 읽고 쓰기가 벌써 이렇게나 되버림
- 무료 용량 초과후에 파이어베이스 가격정책이 생각보다 좀 나가는 편임
- 실제 서비스 운영경험은 가져보기 힘들겠다는 생각
- 파이어베이스에 종속된 개발을 해야함
→ 의욕저하 차라리 다른 프로젝트를 하겠다

### 앞으로 공부 예정
Next, Django 아마 장고를 먼저 공부할 것 같다. JSON SERVER만 가지고 구현해도 되긴 하겠지만 파이어베이스에 데여서 제대로 AWS에 하다못해 글쓰기 지우기만 가능한 rest api라도 배포해서 써보고 싶다는 생각이 들었다. 그러면서 내가 알지 못했던 백엔드에 대한 기본 지식정도는 습득해 놔야 겠다는 생각이 들었다.

아직 정리는 안했지만 프로젝트를 하면서 어떤걸 보고 어떻게 생각했는지 조잡하게 나라도 알아볼 수 있는 메모를 즉시즉시 하려는 노력을 했다.
https://magicpro.notion.site/7932f003181d4a1288bd91d9149a920b?v=699cf57465e843c4a9b5d5e0e48966b3
