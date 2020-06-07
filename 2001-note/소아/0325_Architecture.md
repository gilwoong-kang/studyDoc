## 소프트웨어 아키텍쳐

### What

커스텀머의 요구사항을 반영하는 모델을 만들어 구현을 성공적으로 진행하도록 하는 것이다. **아키텍쳐 스타일과 디자인 패턴** 등을 이용하게 될 것이다.

시스템 요구사항 구체화를 통해 나타내고 분석 모델을 제공한다.

### who 

소프트웨어 아키텍트 와 디자이너 등이 아키텍팅을 한다. 아키텍트는 복잡한 구조의 시스템을 **divide and conquer**하여 구현하기 쉽도록 분할한다.

### why

poor한 디자인과 good 디자인이 있다. 

##### 좋은소프트웨어 디자인이란

당면한 어려운 문제를 설계 방법론과 설계 능력을 통해 위험도를 낮춰주는 형태를 좋은 설계라고 한다. 주어진 dev팀원들이 좀 더 체계적으로 접근할수 있도록 하는 것. 구현되고 테스트 될때 추적 가능한 형태로 하는 것이다. 소프트웨어 품질이 Higher quality attributes한 것을 의미한다.

##### poor 소프트웨어 디자인이란

시스템 요구사항을 제대로 반영하지 못하는 디자인, 새로운 기능의 추가 등 업데이트마다 완전히 시스템을 갈아 엎어야 하는 경우. 재사용이 어려운 경우. 예측할 수 없는 상황을 handle 할 수 없는 설계 가 이것에 해당한다. 

좋은 소프트웨어 디자인을 위해 아키텍쳐를 설계한다

### when

Analysis -> SRS -> Design -> SDD -> Implementation -> Testing 

- SDD  (Software Design Descriptions)
  - design overview,purpose,scope
  - decomposition description
  - dependency and connection description
  - attributes
  - User interface description
  - detailed design

- SRS(Software requirements specification)
  - Requirement Modeling
    - imformation domain modeling, data modeling
    - function modeling, behavioral modeling
    - User interface modeling
  - Requirement Descrption
    - UML
    - Data Flow Diagrams
    - State Transition Diagrams
  - Two aspects
    - Functional requirements(기능적 요구사항)
      - **The functionality of the software system**
    - Nonfunctional requirement(비 기능적 요구사항)
      - **system qualities**, constraints, and behaviors

## Architecture Design Guideline

### software architect Tasks

시스템화로 구조적인 파티션화를 고려해야 한다. 의미론적으로 분해를 해 나갈 필요성이 존재한다. 분해에 따라 서브 시스템을 나누고 그것들끼리 어떻게 연결하고 작용하게 할지에 대해 고민해야 한다. 다이나믹하게 서브시스템간의 운용 또한 고려할 사항이다. dynamic control relationships. Tradeoff analysis on quality attributes and nonfunctional requirements

### Architecture style

특징적인 일을 추상화 시켜 구조적으로 솔루션을 제공하는 것이다. 예를들어 다른 종류에 것에 대해 솔루션을 제공한다면 레이어를 나우어 서브 시스템을 제공하는 형태 등을 취한다. 다이나믹한 내부 처리 로직 등 구조적으로 많은 것을 반영하여 작성해야 한다.

### Key components of an architecture style

- Elements

  각 시스템에서 정의된 기능을 가지고 있는 요소.

- connectors

  다른 종류의 엘리먼트를 연결하는 것.

- Contraints

  제약사항. 엘리먼트가 다른 형태로 연동이 될 때 고민해야하는 여러가지 요소들.

- attributes

  속성. 구조적인 장점과 단점을 표현 할 수 있다. 아키텍쳐 스타일의 장점이 있는데, 이 스타일을 고르는데 고려하고, 문제를 야기할 수 있는 것을 포함한다.

### 가이드라인

1. 무엇을 할까(what to do)에 집중한다. -> identified, verified, validated 

2. Concrete design에 앞서 abstract design을 먼저 도출한다. 

3. 비 기능적 요구사항을 비교적 일찍 고민하는것이 좋다. 

4. 가능하면 재사용성, 확장성(extensibility)을 고려하여 디자인한다.

   OO디자인을 고려하며 이용한다.extensibility는 다양한 것을 붙이는 형태 scalability는 더 확장을 해 나가는 형태.

   안정성이 높아진다. 

5. High cohesion & loose coupling

   할일이 그곳에 있는 정도. 한곳에 할 일이 너무 많으면 목적이 불 분명하고 처리 능력이 떨어진다. 필요한 일만 넣는다. 

   커플링은 서로관의 너무 결합도가 높은 것을 의미한다. 서로 분리가 될 수 있게 하는 것이 좋다.

6. Tolerate refinement of design 

   개선 가능성이 존재한다.

7. Avoid ambiguos design and over-detailed design

### Models for software architecture

전체 모델은 일반화된 형태에 대한 구조를 가지고 필요에 따라 분해한 형태를 가지고 이것을 결합해 이용하며 architecture style, quality attribute를 고려함.

##### Software architecture

- describe its collection of components and the connections
- interactions among these components
- specify the deployment configuration of all components and connections
- conform to the projects finctional and nonfunctional requirements

### Way to describe software architecture

UML을 이용하여 표현할 수 있다. 4+1 view model을 이용할 수 있다. 

- 4+1 

  logical ,process, delopment, physical, user interface

  

## Quality Attribute

### 품질

소프트웨어 시스템을 만들 때 시스템이 필요로 하는 필요성을 만족 하는 정도가 품질의 정도이다. 제품과 서비스의 품질이 만족하는 정도가 품질의 정도

### 품질 속성

양이나 질로 관찰하여 수치로 측정할 수 있는 시스템의 특성

- 품질 속성은 이해관계자들의 관심사와 요구사항을 그대로 반영한다.
- 아키텍처는 이해관계자들이 원하는 수준으로 품질속성을 달성해야한다. 

시스템의 주요한 기능중 하나. 성능이나 보안 등. 비 기능적 요구사항을 반영하는 중요한 부분. 이해 당사자가 원하는 품질에 대한 것을 반영하여 품질 속성을 뽑아내는 것이다. 

얼마나 이해 당사자가 원하는 비 기능적 사항을 반영했으면 좋겠습니까 ? 하는것을 아키텍트가 파악하여 설정하는 것이다. 

### 구현에서의 품질 속성

- 연동가능성(interoperability)

- 확장 가능성(Maintainability and extensibility)

  부분적 변경이 가능 하도록, 또는 추후 기능 추가가 가능하도록

- Testabiliry

  테스트 가능의 정도

- Portability

  이식 가능성. 소프트웨어가 다른 시스템에 이식 할때 작동의 가능성을 나타낸 것이다.

- Scalability

  홪장 가능성. 위의 확장과는 조금 다른데 규모의 경제와 관련된 것이다. 유저의 요청에 따라 얼마나 반응 할 수 있는지(?)

- Flexibility

  변경을 함에 있어서 유동적으로 할 수 있는 정도. 요구사항의 변경에 대해 얼마나 유연하게 대처 할 수 있는지. 

### 런타임 품질 속성

- Availability

  항시 구동 되는 정도

- Security

  보안의 정도

- Performance

  성능. 시스템이 효율성을 가지고 처리할 수 있는 정도. 시간과 자원

- Usability

  사용자가 이용 가능성 

- Reliability

  죽지 않을 가능성 실패의 정도가 적다. 실패가 발생해도 적절히 처리하는 정도

- Maintainability(extensibility,adaptability,serviceability,testability,compatibility,and configurability)

  유지 가능성

### 비지니스 속성

- Time to market

  시장성을 위해 특정 시간 내로 시장에 내보내야 하는 정도

- Cost

  비용

- Lifetime

  더이상 필요 없을 정도까지 얼마나 이 시스템을 사용 할 수 있는지에 대한 정도



신뢰와 성능의 tradeoff

Scalability와 성능간의 tradeoff

어떤 것을 우선할지 잘 선택해야 한다. 