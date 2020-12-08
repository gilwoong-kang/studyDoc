## 정보보호

### 웹보안

#### Cookie

프라이버시를 해칠 수 있다. 간단한 사용자를 식별 할 수 있는 태그 등을 남긴다. SSL을 쓰는 것이 좋다. 보안상.

클라이언트에 저장되는 요소는 SSL로 보안 할 수 없다. (쿠키 등) 

쿠키는 사용자가 변경 할 수 있다. 옛날에 결제 정보를 쿠키에 두도록 했다가 문제가 발생한 예시가 존재함. 

##### Countermeasure

쿠키는 서버가 내려줌. 클라이언트가 쿠키를 바꾸지 못하도록 바꾸고 싶음. 서버가 키와 값을 해쉬 돌려서 태그로 붙인다. 

### Session management

서버쪽에서 클라이언트의 상태를 확인하기 위한 기술. 

- 세션토큰을 이용하는 방법이 세가지.

  브라우저 쿠키를 이용하는 방법, URL링크에 담는 방법. Hidden form을 이용하는 방법. 

####  Session hijacking

값을 유출하거나 뺏어올 수 있을 때. 예측 가능한 id나 값을 설정하지 말것. 

> cross site criptiong(XSS)

##### Strong session token 

> SID = [userID, exp. time,data]
>
> 위 값만 가지면 위조 가능하기에 여기다가 HMAC(k, SID) = Session Token
>
> 추가로 ip정보를 넣어 더 강력하게 할 수도 있고 로그아웃에 대한 스테이터스도 두어서 세션 하이재킹을 막는다. 
>
> 클라이언트 ip주소를 넣으면 왜 좋으냐 하면 클라이언트가 바뀌었나 안바뀌었나 파악할 수 있기 때문임. 하지만 이것에 의존하면 안된다. 

#### XSS(Cross-site scripting)

CVE(CWE) Improper Neutralization of Input During Web Page Generation

적절하지 못한 중성화(위험한 태그를 없애는 것을 의미), 웹페이지가 생성되는 동안. 인풋값을 적절하게 뉴트럴라이제이션 하지 못한것을 의미. 

보는 글에 자바 스크립트 등으로 실행 가능 하도록 만듦. 보는 사람의 입장에서 코드가 동작 하도록 함. 

- Persistent XSS

  공격자가 공격 코드를 포함해 글을 올림. 클라이언트가 읽음. 읽는 과정에서 공격 코드를 읽고 구동시킴. 공격자에게 세션 토큰이나 쿠키 값 등을 전송하도록 함. 

  요즘 유행하는 것을 여기에 비트코인 채굴 코드를 넣어서 채굴하도록 함. 채굴에 성공하면 공격자에게 보냄. 

  persistent라고 붙인 이유는 계속 남아있기 때문.

- Non Persistent XSS (or reflected XSS)

  검색엔진에서 검색어를 입력하게 되면 검색 결과 페이지 맨위에 결과로써 올라왔다. 

중요한 것은 공격에 해당하는 스크립트를 만들어놓고 공격 대상자가 이 스크립트를 실행되도록 만듬. 

> Sanitization - 방역

바람직하지 못한 캐릭터(스크립트성 언어의 캐릭터)를 제거하도록 함. 예를들어 JSP에서 <를 &lt 등으로 변경하면 동작하지 않음. 

클라리언트가 서버를 너무 믿어서 당함. 

#### Cross-Site Request Forgery(CSRF)

거짓된 요청을 해서 공격. Aka one-click attack or session riding

성공하면 서버를 공격자가 가져갈 수 있음. (성공만 하면 대박) 서버가 클라이언트를 너무 믿어서 당함. 

- 패스워드를 바꿀 때 예전 패스워드를 한번 더 물어보는 이유. 

  먼저 XSS로 공격. 이메일 등을 통해서 전송하면 클라이언트가 서버에 로그인한 상태에서 공격 XSS를 누르면 변경 페이지로 자동으로 가서 변경되게끔 시도하도록 함. 

  현재 비밀번호를 한번 더 입력하라고 한다면 이 시도를 막을 수있다. 

### SQL Injection

데이터베이스를 공격하는 기술. CWE-89. Failure to Sanitize Data into SQL Queries. 

id나 패스워드 등 입력창에 sql구문을 집어넣는 것. 

때문에 '"\/;와 같은 특수문자를 사용하지 못하도록 해야함. 데이터베이스의 계정 권한을 낮춤. 

#### Insecure Direct Object Reference

직접 URL을 참조하여 들어가는 것. URL에 내용 일부를 살짝 변경하여 다른 정보에 접근 하는 것. 

#### Access Control for Administration

관리자용 url이 따로 존재할 수 있는데 공격자들이 이것을 추측해서 시도해 볼 수 있으므로 주의해야 한다. 웹서버 자체에서 접근 제어를 제한할 수 있다. 

##### 2factor authentication

두가지 요소로 인증할 것. 패스워드 OTP 전화인증 등... 

#### 보안 도구들 : Vulnerability Scanner

nmap, hping3, Nessus, Paros ...

black box, white box(소스코드가 공개된 종류들)

