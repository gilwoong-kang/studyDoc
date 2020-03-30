## 소프트웨어 아키텍쳐

7강

### Quality

Product or a service 가 필요적으로 만족하는 feature와 characteristic의 정도로 나타나는 것이 Quality

### 표준

ISO/IEC FCD 25010 : SQuaRE 최근에 이것으로 변경. 본래는 ISO/IEC 9126 어떤 표준을 따라야 한다는 것은없음. 필요에 따라 따를것.

### 품질 모델

#### 품질모델구조(IEEE 1061)

##### Quality

목표 시스템이 충족해야 할 품질

##### Quality Factor

사용자나 관리자 중심, 시스템이 외부에 보이는 품질,Charactoristics,Factors라고도 한다.

##### Quality Subfactor

구현자 중심, 시스템 내부에서 다루는 품질. Quality Factor를 측정할 수 있는 소프트웨어 속성으로 바꾼것. Sub-characteristics,Criteria라고도 한다.

##### Metric

평가자 중심. 품질을 측적하는 방법과 척도

#### 구조 적용 예

예를들어 효율성 이라고 한다면 내부에 Time behavior라던가 Resource관련 요소가 나올 것이다. 

### ISO/IEC 9126 품질 모델

외부와 내부로 분리. 외부와 내부에 대해 각각 6개의 특징들을 명시한다. 각 특징들은 부 특성들로 나누어진다. 각 특성들을 내부와 외부 metrics에 의해 측정된다.

라이프사이클에서 품질 측정을 많이 하게 된다. 

#### Quality in the lifecycle

좋은 소프트웨어 시스템을 가진다는 것은 내부적 퀄리티를 만족하는 것이고, 내부 퀄리틸가 좋은 것은 외부 퀄리티가 만족한다는 것이고 외부 퀄리티가 좋다면 사용자 입장에서 사용에 대한 퀄리티가 만족한다는 것이다.

- Functionality

  필요한 기능을 제공하는가

  - Suitability
  - Accurateness
  - Interoperability
  - Compliance
  - Security

- Reliability

  믿을만 한가

  - Maturity
  - Fault Tolerance
  - Recoverability

- Usability

  쓰기 쉬운가

  - Understandability
  - Learnability
  - Operability

- Efficiency

  효율성은 좋은가

  - Time Behavior
  - Resource Behavior

- Maintainability

  유지보수 가능한가

  - Analyzability
  - Changeability
  - Stability
  - Testability

- Portability

  이식 가능한가

  - Adaptability
  - installability
  - Conformance
  - Replaceability

### Quality Model (ISO 25010)

#### Functional Suitability

- Functional Completeness

  기능적으로 완성을 했느냐 

- Functional correctness

  정확한가

- Functional appropriateness

  적절한가

#### Performance efficiency

- Time Behavior

  Due time

- Resource Utilization

  자원의 효율성 (CPU, RAM, Network,Storage,VM 등)

- Capacity

  예를들면 어떤 시스템에서 다른 시스템에 스트리밍을 준다고 할때 큐를 어느정도 할 것이냐 버퍼가 충분한 용량을 가지지 않으면 지터가 발생. 

#### Compatibility

호환정도

- Co-existense

  여러시스템이 같이 공존하는 정도 

- Interoperability

  다른 시스템간 상호 호환정도

#### Usability

- Appropriateness
- Learnability
- Operability
- User error protection
- User interface aesthetics
- Accessibility

#### Reliability

신뢰

- Maturity

- **Availability(중요)**

- Fault tolerance

  장애 극복

- Recoverability

  회복성

#### Security

- confidentiality

  기밀한 내용을 권리가 있는 사람이 적법하게 접근하는 정도

- integrity

  데이터가 있으면 그 데이터가 안전하게 저장 되는 정도

- Non-requdiation

  액션을 했을때 차후에 부인을 하지 못하도록 하는것

- Accountability

  추적을 할 때 책임을 충분히 지는 형태

- Authenticity

  진위 파악의 정도

#### Maintainability

- Modularity

  모듈화 정도

- Reusability

  재사용 정도

- Analyzability

  분석화 정도

- **Modifiability**

  **수정 가능의 정도**

- Testability

  테스트 가능의 정도

#### Portability

이식 가능성

- Adaptability
- installability
- Replaceability

#### 품질모델 (ISO/IEC9126)

- Quality in use
  - Effectiveness
  - Productivity
  - safety
  - Satisfaction