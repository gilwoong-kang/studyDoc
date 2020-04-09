## 소프트웨어 아키텍쳐

### 가시성(visibility)

- Private scope : 클래스안에서만
- package scope : 같은 패키지 안에서만
- Protected scope : 상속받는 관계에서만(같은패키지 가능)
- public scope : 시스템 전체에서

### 속성

어트리뷰트라는 것은 정보를 담을 수 있는 곳. 속성 또는 연관관계로 표현

> [Visibility] [/] name [:type] [multiplicity] \[=default][{property-string}]

> Static Attribute는 밑줄을 쳐서 구분한다.
>
> 속성이 한 class의 여러 객체에 의해 공유된다.

### 연관관계

연관관계는 소스 class와 타겟 class를 연결. 속성의 이름은 역할이름으로 표현. 연관관계의 양 끝에 개수를 표현

### 메소드

행위에 대한 명세.

> [visibility] name [parameter-list] ':' [return-result] [{properties}]

#### 정적 메소드

동일하게 밑줄 그어 표현. 이때 인스턴스가 아니라 정적 메소드임에 주의(인스턴스 선언부분에서)

### 관계

클래스간의 관계를 어떻게 표현 할 것이냐에 대한 것이다.의존,연관,집합,복합,상속 5가지가 있다.<img src="/Users/gilwoongkang/School/2001-note/소아/image/스크린샷 2020-04-01 오전 10.26.36.png" alt="스크린샷 2020-04-01 오전 10.26.36" style="zoom:80%;" />

### 의존성 관계

서로 아는 정도. 한 요소가 다른 요소에 의존도 정도. 의존성을 통제하지 못할 경우, 통제가 어려워진다. 

### 연관관계

주로 컴포지트한 클래스가 다른 클래스에 전가되서 갈 수 있도록 할때. 어떤 의미로 연관되어 가는지 표현. 단순 일직선인 경우 서로 연관. 화살표 방향이 있다면 화살표 방향으로 의존. 

### 집합관계(aggregation)

하나에 해당되는 것이 여러개에 관련. 예를들어 '장'이라는 것은 '책'이라는 것의 부분. Association이 큰의미 그안에 Aggregation. 그안에 Composition.

> 클럽에 멤버들이 있다. 큰 측에 다이아몬드가 그려진다. 

### 구성 관계

Composition은 전체-부분관계. has a, contains,is part of 등과 같은 말로 표현. Aggregated instances <u>must belong to only one composite at a time</u>

Composition은 물리적인 결합되어 있어 분리되어 생각 불가능. 계층 구조를 가질 수 있다. 채워진 다이아몬드로 표현.

### 상속 관계

수퍼클래스와 서브클래스간 놀리적 추상화 제공.

### 추상 Class

직접 인스턴스를 생성할 수 없는 클래스. 보통 이탤릭체로 표현한다. 

### Interface

구현을 가지지 않는 Class. 모든 특성이 추상화 되어있음. \<\<interface>>로 표현한다. 구현의 변경이 용이. 변경에 의해 영향 받는 부분을 최소화.

인터페이스를 롤리팝으로 표현 가능하다. 

### Constraints

![스크린샷 2020-04-01 오전 10.52.42](image/스크린샷 2020-04-01 오전 10.52.42.png)메모장 등으로 써도 가능하다.

