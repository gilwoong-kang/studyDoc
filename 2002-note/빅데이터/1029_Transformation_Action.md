## 빅데이터

### filter

filter(function) 형태인데, 함수는 반드시 true/false를 리턴해야 한다. true를 리턴하는 원소만 반환한다. 

```scala
val movieGenres = movieInfo.map(mi=>(mi(1),mi(2).split('|')))
val actionMovies = movieGenres.filter(m=>m._2.contains("Action"))
val actionMovie = actionMovies.take(1)
```

> tuple (title,[]) 형태로 리턴. 
>
> m._1 의 형태는 튜플에서 몇번째 엘리먼트인지 지정해 주는 것. 

### Other RDD transformations

- RDD1.union : RDD1 과 RDD2의 원소를 합해서 하나의 RDD
- RDD1.distinct() : 중복 삭제
- RDD1.intersection(RDD) 공통으로 들어간 원소 반환
- RDD.subtrtact(RDD) 포함된것 빼기

- sc.parallelize(List) : driver 객체를 RDD화

### RDD Action

액션은 RDD가 아닌 실제 값을 반환한다. 

##### RDD.reduce(function)

주어진 함수 실행하여 aggregation진행. ```val input = sc.parallelize(List(1,2,3,4,5)) input.reduce((a,b) => a+b)```

> reduce를 실행시킬 때에는 교환법칙과 결합법칙이 성립하는 식이여야 한다. 즉 a-b는 안된다. (순서 변경에 따라 도출되는 값이 다르기 때문)

#### Reduce 응용

장르 갯수가 가장 많은 영화 구하기

```scala 
movieInfo.map(mi=>mi(2).split('|')).map(x=>x.length).reduce((x,y)=>Math.max(x,y))
								리스트 도출					 |  정수형 변수로     |       리듀스. 임의 두값중 큰값 리턴. 
```

##### RDD.collect

RDD의 모든 값을 확인 및 반환. 

##### take(N)

첫 N개의 원소를 RDD로 부터 반환

##### takeOrdered(N)(OrderingMethod)

정렬된 상태에서 N개 반환

##### takeSample(withReplacement,num,seed)

원소중 임의 원소를 반환함. 

> withReplacement란 한번 뽑은 것을 또 뽑도록 하는 것에 대함. true라면 중복 가능

##### count 

원소 갯수 반환

##### countByValue

각 원소별로 발생하는 횟수 카운트. 