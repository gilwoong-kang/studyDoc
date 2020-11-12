## 빅데이터

#### RDD 결과물을 파일로 저장

```RDD.saveAsTextFile(path)```. RDD의 결과물을 파일로 저장하는 API. 결과물은 리듀스를 실행하는 워커 갯수에 따라 별개로 생성됨. 각각의 파티션은 part-xxxx 파일로 생성된다. 

#### RDD Partitions

하둡 MapReduce 프로그래밍에서 각 블락 별로 병렬 실행 됨. 스파크에서도 유사한 개념 적용. RDD의 파티션 갯수만큼 병렬 수행이 되기 때문에 중요하다. 

##### repartition

리파티션은 많은 자원을 필요로 하는 작업이다. 네트워크를 통한 많은 자원의 통신을 필요로 하기 때문. ```coalesce(N)``` 메소드를 사용하면 데이터 전송을 최소화 하면서 파티션의 갯수를 줄일 수 있다. 

파티션의 갯수 변경 전에 블럭사이즈에 대한 고려를 먼저 해야한다. 블락 사이즈가 적절한 사이즈인지 충분히 고려 한 뒤 파티션 갯수를 고려할 것. 

#### 데이터 셔플

파티션간 데이터 네트워크로 상호 전송 함. ```reduceByKey,groupByKey,repartition``` 이용.  앞 두가지는 유용한 함수인데 나중에.. 많은 자원이 필요하다. 주의가 필요하다. 

#### PairRDDFunction

RDD에서 키 밸류쌍은 다양한 응용에 활용 된다. 키밸류 페어를 이용하는 것이 페어RDD. 키별로 aggregation 또는 grouping이 가능하게 한다. 

```reduceByKey,groupByKey``` 등. 스칼라의 Tuple2(Pair) 를 활용하여 키밸류쌍 표현가능. ```a._1 //key   a._2  // value``` 

```scala
val input = sc.parallelize(List("dog 1","cat 1","dog 1","dog 1","cat 1"))
val pairs = input.map(x => (x.split(" ")(0), x.split(" ")(1).toInt)) // 소괄호 안에 저렇게 콤마로하면 튜플이 된다
pairs.collect
```

#### KeyValue Pair RDD 활용한 Transformation

##### groupByKey()

주어진 튜플에 대해 출력으로 <K,literal\<V>>를 반환함. ```pairs.groupVyKey().collect()```

##### reduceByKey(func)

반드시 aggregate function이여야 한다. 키값이 같은 애들끼리 묶은다음에 밸류 값들에 대해 함수를 처리한다. 

##### mapValues(func)

밸류들에 대해 입력으로 주어진 함수 적용.

##### keys()

키를 반환.

##### values()

밸류를 반환

##### sortByKey

Key 기준으로 정렬함.