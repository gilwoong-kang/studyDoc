## 정보보안

### SSH

<img src="/Users/gilwoongkang/School/2002-note/정보보안/image/IMG_296B95B7AD28-1.jpeg" alt="IMG_296B95B7AD28-1" style="zoom:40%;" />

### Applied crypto

#### Secret sharing algorithm

어떤 한명이 모든 비밀을 전부 가지면 위험하기 때문에 비밀을 두사람 이상, 일정 명수 이상 모였을 때만 본래 패스워드가 완벽히 복원되는 알고리즘을 말한다. 

1차함수에서 두 점이 주어지면 함수가 확정된다. (한점만 알경우 무수히 많은 함수.) Y절편 기준 함수 $$y = ax + b$$ 가 있다고 하고 $$a,b$$ 를 모른다고 하자. 이 함수의 한 점값을 Alice에게 주고 또다른 한 점을 Bob에게 준다. 이 두 식을 합치면 일차 연립방정식으로 나타낼 수 있고 a,b값을 알게 된다. 

3사람 이상이서 가지게 하여 이중 2사람만 모여도 해제할 수 있는 형태로 제작 가능하며 한사람에게 2개의 값을 가지고 있도록 하여 권한을 다르게 할 수도있다.

2차함수로 표현하는 것도 가능한데 이 형태의 경우 secret이 3개로 분할 된다. 

##### 일반화

시크릿을 n개로 분할하고, K명이 모이면 secret이 생성된다고 할 때, k-1차 함수를 선언하면 된다.

#### Cut and choose protocol

케이크를 잘라서 먹는다고 할때 한사람을 택해 자르게 하고 나머지가 먼저 고르게 한다. 그러면 공정하게 가능. 

#### Blind signature

<img src="/Users/gilwoongkang/School/2002-note/정보보안/image/BliendSignature.jpg" alt="BliendSignature" style="zoom:40%;" />

- Kerberos : 대칭키 기반 인증 시스템<img src="/Users/gilwoongkang/School/2002-note/정보보안/image/스크린샷 2020-10-13 오전 11.34.10.png" alt="스크린샷 2020-10-13 오전 11.34.10" style="zoom:50%;" />

앨리스가 일반 사용자. 밥이 서버. 앨리스 입장에서 서로다른 여러 서버에 접근해야 하는 경우가 많다. 이럴경우 kerveros를 이용한다. 중앙 센터에 Key distribution center. 서버에 가입을 한다. 서버도 KDC에 등록한다. KDC에는 큰 DB가 존재하여 사용자와 서버의 키를 등록해 놓는다. 그 이후 앨리스가 통신 하고자 할 때, 밥과 통신하고 싶다고 KDC에 연결한다. KDC는 랜덤넘버$$K_{AB}$$ 를 생성하여 N1,Bob,Kab,티켓을 보내준다. 이 티켓은 밥만 해제할 수 있음. 앨리스는 티켓과 시간을 보내고 밥은 티켓을 열어본 뒤 확인하고 앨리스와 연결한다. 

