## 보안 개론

### 보안의 목표

일반적으로 3가지.  Confidentiality(기밀성), Integrity(무결성), Availability(가용성)(CIA) 

- 기밀성 : 남들이 모르게. 파일 암호화 등의 방법으로 가능. 허가되지 않은 정보의 유출을 막는 것. 암호화가 주된 요소.
- 무결성 : 내용이 바뀌지 않았음을 증명 할 수 있어야 한다.
- 가용성 : 사용 가능한 상태

#### Confidentiality

암호화 하여 메세지를 전달하여 기밀성을 유지한다. 그런데 암호화를 풀 키를 전달하는데 문제가 있다. 키를 안전하게 전달할 방법에 관한 문제가 존재하는 것이다. (키 관리의 이슈)

Access Control(접근 제어) : 인가된 사람만 접근 할 수 있도록 하는 것을 접근 제어라고 한다. Ex) 관리자 제어. 

달성 도구로써 Authentication,물리적 보안을 이용할 수 있다. 

##### Authentication

- 그사람이 가진 것을 보고 그 사람인 것을 파악한다.(something the person has) 예를들어 자동차의 스마트키, 공인 인증서, 난수표, 신분증 ID 카드
- 그사람이 아는 것을 가지고 파악한다(something the person knows). 패스워드 같은 것.
- 그사람인 것을 증명한다(something the person is). 생채인증, 지문 등의 방법. 

##### Physical security

물리적 보안. 보안 위험한 곳 등에서는 와이파이를 사용하지 않는다. 금고의 사용 등.

- Faraday cages : 알루미늄 포일 같은 것으로 방을 모두 감싸면 전파가 나가지 못함. 

#### Integrity

데이터에 결함이 발생하면 안된다. 

##### Tools

- 백업: periodic archiving of data(아카이빙)
- 체크섬 : 데이터가 깨졌는지 알 수 있는 것. 
- 데이터 복구 코드(Data crrecting codes)

> Raid(Redundant Array of Independent Disks) : 서로다른 디스크를 묶어 데이터 결함을 복구하도록 하는 것. 

#### Availability

내가 원하는 시간에 정보에 접근하여 사용할 수 있어야 한다. 

##### Tools

- Physical protections : 물리적으로 달성
- Computational redundancies : 컴퓨테이션 정보를 중복적으로 관리한다. 

#### 또 다른 컨셉

AAA - Authenticity(진위 - 그사람이 했다 까지 볼 수 있음, 서명), Assurance(보증), Anonymity(익명)

- 보증
- 진위 : 전자 서명, nonrepudiation(부인 봉쇄) 나중에 아니라고 말 못하게 함.
- 익명 : 데이터 보안 이슈로 핫함. 
  - Aggreagation : 개인 개인의 많은 데이터를 합침
  - Mixing : 섞어서 모르게 함.
  - Proxies : tor 라는 기술이 있음. 접속한 것을 모르게 하는 것이다. 
  - Pseudonyms : 별명

#### Threats and attacks

위협과 공격을 대비해야 함.

##### Eavesdropping 

옅듣는 공격과 위협

##### Alteration

중간에 내용을 변화하거나 함. **<u>man-in-the-middle attack</u>** 중간자가 변조시켜 공격함.

##### Denial-of-Service

예를들어 스팸 이메일 테러. (요즘엔 쉽게 막음) 

##### Masquerading

변장. 막기 위해 강력한 인증 필요

##### Repudiation

부인. 전자 서명 기술로 막음



열가지 보안 원칙 중 몇가지 중요한 원칙

- Economy of mechanism : 보안이라는 것도 경제성을 생각해야 한다. 
- Fail-safe default : 장애에 대해 우선순위나 해결에 대함
- Open design : 오픈소스와 비슷한 개념. 암호 알고리즘 등 공개할 것인가 폐쇄적으로 할 것인가. 
- Separation of privilege : 권한 분산. 개발자와 운영자를 다른 사람으로 할것. 등
- Least privilege : 딱 권한 만큼만 일을 주는 것. 

##### Role based Access Control

사람에게 권한을 주는 것이 아닌, 역할에 대해서 접근 제어를 주는것. 

##### Caesar Cipher

최초의 암호. 