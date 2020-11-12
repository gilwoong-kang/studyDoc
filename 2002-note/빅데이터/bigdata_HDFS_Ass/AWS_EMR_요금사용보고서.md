<div style="text-align:center;font-size:2em;">빅데이터 플랫폼 </br></div><div style="font-size: 1em; text-align: center;">AWS 비용 사용 분석</div></div>

<div style="text-align:right;">소프트웨어전공</br>20152791 강길웅</div>

---

### 사용 요금

<img src="/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-29 오후 5.44.33.png" alt="스크린샷 2020-10-29 오후 5.44.33" style="zoom:33%;" />

<div style="text-align:center;">[그림 1] AWS Educate Account Status</div>

위 그림에서 확인 가능하듯 사용 금액은 $0.24이다. 어떻게 발생했는지 분석 해보고자 한다. 

### 사용된 EMR 인스턴스 정보

<img src="/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-29 오후 5.48.17.png" alt="스크린샷 2020-10-29 오후 5.48.17" style="zoom:33%;" />

<div style="text-align:center;">[그림 2-1] AWS EMR 인스턴스 그룹 정보</div>

**마스터 노드에 m4.large, 코어 노드에 m4.large를 이용했다.** 마스터 노드는 1개의 인스턴스를 이용했고 코어 노드는 2개의 인스턴스를 이용해 **총 3개의 인스턴스를 이용했다.**

![스크린샷 2020-10-29 오후 5.51.22](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-29 오후 5.51.22.png)

<div style="text-align:center;">[그림 2-2] AWS EMR 인스턴스 요금 정보</div>

AWS 요금 정책에 보면 m4.large인스턴스는 EC2 인스턴스를 위해 시간당 0.10 USD를, EMR요금을 위해 시간당 0.03 USD를 지불하게 된다. EMR의 요금은 사용 분 단위로 요금이 지출된다. 

그렇다면 해당 EMR은 얼마나 사용 되었는지 알아보기 위해 EMR - 클러스터 - 경과시간을 통해 사용 시간을 알아보자.

<img src="/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-29 오후 5.54.44.png" alt="스크린샷 2020-10-29 오후 5.54.44" style="zoom:67%;" />

<div style="text-align:center;">[그림 2-2] Amazon EMR 클러스터 요약</div>

위 그림은 Amazon EMR 클러스터 요약 창이다. 해당 창에서 37분간 EMR이 동작 한 것을 알 수 있다. 

### 사용 요금 계산

##### EC2요금

m4.large 인스턴스를 이용했으므로 시간 당 \$ 0.10, 분당 \$ 0.0016666  의 요금이 부과된다. 37분 동안 사용했으므로, **사용 시간동안 인스턴스 1개당 요금은 \$ 0.061666 이다.** 

##### EMR요금

m4.large 인스턴스의 시간당 EMR 요금은 \$ 0.03 이고 분당 \$ 0.0005이다. 37분동안 실행했으므로, **사용시간동안 인스턴스 1개당 EMR요금은 $ 0.0185 이다.**

##### 요금 합산

**인스턴스당 EC2 요금과 EMR요금을 합산하면 약 $ 0.080166666이다.** 그런데 마스터노드 1개와 코어 노드 2개, **총합 3개의 인스턴스를 이용**했기 때문에 3개 인스턴스 요금의 합인 <u>**약 \$ 0.2405 의 요금이 발생한다.**</u> 

계산 결과가 실제 사용 요금과 거의 일치함을 볼 수 있다.

