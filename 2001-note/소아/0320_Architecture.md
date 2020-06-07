## 소프트웨어 아키텍쳐

0320

### 리뷰

타겟 시스템이 있을때 문제 자체에 대해 모델로 만드는 것이 소프트웨어 아키텍쳐의 중요한 부분. 이렇게 모델화 한것으로 솔루션을 만든다. 

대상 시스템과 모델이 하나의 공통적인 이해관계로 묶이고 기능과 품질이 나타나게 된다고 배웠다.

### 구조 & 뷰

아키텍쳐의 구성이 있을때 그것을 나타내는 것이 뷰라고 할 수 있다. stackholder의 예시 는 업무 관리자 준수 검토자 아키텍터 고객 디비 관리자 배포자 설계자 평가자 구현자 유지 보수자 등 시스템과 관련된 모두가 stackholder라고 지칭할 수 있다. 뷰는 설계의 구조를 나타낼수 있는 리프리젠테이션을 가지고 있다라고 할 수 있다. 

- Structure

  모듈(?)

- View

#### 모델링 뷰 

4+1 뷰

- Logical
- Process
- Implementation
- Deployment
- Use-Case

유스케이스뷰가 전체를 아우르는 것이다.

##### Logical viewPoint

기능적인 요구사항에 대한 뷰라고 할 수 있다. 보통 시스템이 제공하는 서비스들이 이런 기능적인 요구사항을 반영한다고 볼 수 있다. 

- 클래스 형태
- 인터랙션의 형태

로 나타낸다

##### Process Viewpoint

> Processor / process / thread 에 대해 고민.
>
> process는 실행되는 일이다. 즉 프로그램. 스레드는 큰 프로세스에 대해 나누어 실행하는 것.  

프로세스를 어떻게 관리하고 스레드를 어떻게 관리 할 것인가에 대한 것이다.

퀄리티에 따라 nonfunctional requirements로 할지 다른 것에 대해 적용할지 등 품질이나 avaiability에 대한부분.

##### Deployment viewpoint

배치에 대한것. 어떠한 서버에 어떠한 것을 넣어줄것이고, 어떠한 곳에 어떠한 것을 적재 할 것인지에 대한 것을 명세함. 

system's non functional req를 고려할 수 있다.(+system availability, reliability,performance)

##### Implementation viewpoint

모든 환경이 된 상태에서 구현이 배치 될 수 있느냐에 대함..?

##### Scenario viewpoint(Use-Case viewpoint)

시스템을 사용하는 사례(내용)에 있어서 액터가 어떤 상황에 따라서 무엇을 할지 액티비티가 나열이 되고 어떤 결과가 도출되는 것인지 나타내는 것이다.

<img src="/Users/gilwoongkang/School/2001-note/소아/image/스크린샷 2020-03-20 오전 10.12.56.png" alt="스크린샷 2020-03-20 오전 10.12.56" style="zoom:50%;" />