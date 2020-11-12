## 빅데이터

#### 2개 kv쌍에 대한 작업

subtractByKey(other_rdd) : 타 rdd에 존재하는 key값을 원본 rdd에서 삭제함.

Join(otherrdd) : 같은 키값을 기준으로 하나의 rdd로 변환(inner join). 다른 조인 방식도 지원함. 각 키값에 대해서 가능한 모든 밸류들의 조합을 만들어냄(cartesian)

Cogroup(other-rdd) : 같은 키값기준으로 하나의 rdd로 변환(outer join).각 값에 대해 하나의 compactbuffer로 반환됨. compactBuffer는 스칼라에서 새롭게 만든 list.

> 이너조인은 공통된 것에대한 조인을, 아우터조인은 존재하는 모든것에 대해 조인을 실시한다. 

#### KeyValue Pair RDD를 활용한 genre counter

플랫맵을 사용했는데, 이 이유는 리스트에 리스트가 아닌 하나의 리스트에 전부 펼쳐놓기 위함임. 일반적일때는 그냥 맵으로 하는게 맞음. 

```scala
val movies = sc.textFile("/FileStore/shared_uploads/smostr@gmail.com/movies.csv")
val movieInfo = movies.map(movie => movie.split(','))
val genres = movieInfo.flatMap(mi => mi(2).split('|'))
val genreOne = genres.map(g => (g,1))
val genreCounter = genreOne.reduceByKey((x,y) => (x+y))
genreCounter.takeOrdered(10)(Ordering[Int].reverse.on(x=>x._2))
```



### Monte-Carlo 기법을 활용한 PI estimator

반지름이 r인 원이 주어질 때 pi값의 추론 기법. 폭이 2r인 정사각형에 다트를 던진다고 가정한다. 던진 다트가 원 안으로 들어갈 확률은 정사각형 넓이 대비 원의 넓이. 

```scala
val NUM_SAMPLES = 100000
val exec = sc.parallelize(1 to NUM_SAMPLES)
val inCircle = exec.map(i => {
  val x = Math.random()
  val y = Math.random()
  if(x*x + y*y < 1.0) 1 else 0
})
val count = inCircle.reduce((v1,v2) => v1 + v2)
println("Estimated Pi is " + 4.0*count/NUM_SAMPLES)
```

