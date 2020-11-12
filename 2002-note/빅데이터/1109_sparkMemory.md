## 빅데이터

#### 클러스터내에서 변수공유

변수의 broadcast. 모든 워커들이 브로드캐스트된 변수를 보관하고 있음. 각 executor가 보관하는 것이 아니기에 효율적. 

#### RDD persistence

스파크 rdd는 lineage를 통해서 필요에 따라 데이터를 만들어냄. lineage를 사용하여 매번 새로운 값을 계산하면 느림. Cache(), persist()를 통해 rdd값을 보관하면 새로운 계산 불필요. 

### Spark Cluster

클러스터 매니저 - stand-alone,yarn,mesos,k8s. 

어떤것을 이용해도 형태는 유사하다. 드라이버 프로그램이 있다(스칼라 인터프리터 등.) 여기에 spark context 있고 이후 클러스터 매니저통해 워커노드와 연결. 

configurations 하고 싶으면 SparkConf.class하는 방법. Spark- home/conf 를 들어가서 바꾸는 방법 등있다. 

### Spark memory

스파크에서 메모리가 가장 소중한 자원. 자바에서는 오브젝트가 헤더라는게 존재해서 16바이트의 메타데이터를 가짐. 스트링의 헤더는 40바이트. 각각의 캐릭터당 16바이트. 만일 10자짜리 쓰면 60바이트. 

스파크에서 각 익스큐터가 메모리를 얼마나 사용할지 설정할 수 있다. Ex ) executor.memory => 3GB

- Resered memory : 사용자가 프로그램에서 사용할 수 없다. 스파크 시스템을 위해. 시스템 오버헤드로 300mb가져간다. 

- user memory : 사용자가 스파크 코드를 작성해서 map이나 filter등을 통해 함수안에 local 객체를 저장하는 곳이 유저 메모리. 

  (Executor memory - resered memory ) *(1.0 - spark.memory.fraction)

- spark memory : 스파크가 rdd같은것을 저장하거나 익스큐터중 중간 결과물들을 저장하기위해 사용하는 것. 디폴트는 0.6. 

  Spark memory = (executor heap - 300mb) * (spark.memory.fraction)

  - Storage memory : 캐싱. rdd캐싱이다. 가장 중요한 자원중 하나. 
    - Spark.memory.storageFraction. 스토리지 메모리로 사용하려는 메모리의 값. 
  - execution memory : 사용자가 코드내에 사용한 코드는 아니고 처리하기 위해 임시 데이터를 저장하는 공간들. 

  예를 들어 스파크 메모리가 1기가. 스토르지 프랙션이 0.4. rdd캐시(스토리지 메모리) 가 1gb를 다 쓸수 있다. execution메모리가 더 필요하다고 하면 뺏어온다. 미니멈한 스토리지 프랙션까지 뺏어온다. 

  execution메모리는 프로그램 실행에서 반드시 필요한 메모리기 때문에 evicted가 불가능하다. 