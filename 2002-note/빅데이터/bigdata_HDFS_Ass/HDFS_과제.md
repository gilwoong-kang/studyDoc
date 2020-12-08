<div style="text-align:center;font-size:2em;">빅데이터 플랫폼 </br></div><div style="font-size: 1em; text-align: center;">HDFS 실습 과제</div>

<div style="text-align:right;">소프트웨어전공</br>20152791 강길웅</div>



---

### Download MovieLens Data

실습에 필요한 데이터 셋 다운로드. ```wget <url>``` 명령어 통해서 다운로드. 

![스크린샷 2020-10-27 오후 7.39.14](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.39.14.png)

### hdfs dfs

HDFS의 기본 명령어 포맷은 ```hdfs [SHELL_OPTION] COMMAND``` 이다. 이중 대부분의 명령은 ```hdfs dfs [COMMAND[COMMAND_OPTION]]``` 형식이다. 단순히 ```hdfs dfs``` 명령을 입력하면 HDFS의 파일 시스템과 연관된 옵션들을 보여준다. 

##### ![스크린샷 2020-10-27 오후 7.40.02](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.40.02.png)

### hdfs dfs -ls

디렉토리 상태 표기. 

![스크린샷 2020-10-27 오후 7.40.40](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.40.40.png)

### hdfs dfs -mkdir **[-p]**  \<paths>

입력으로 들어온 경로에 지정 이름의 디렉토리를 생성한다.

![스크린샷 2020-10-27 오후 7.41.36](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.41.36.png)

### **hdfs dfs** -put \<localsrc> \<dst>

local의 파일을 hdfs로 복사해서 가져온다.

![스크린샷 2020-10-27 오후 7.43.05](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.43.05.png)

### **hdfs fsck** \<path>

파일 시스템의 상태를 확인한다. 

![스크린샷 2020-10-27 오후 7.46.31](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.46.31.png)

##### - ratings.csv 파일의 전체 파일 크기는 얼마인가? 평균 블락 크기는 무엇인가? 블락의 갯수는 몇개이며, HDFS 에서의 기본 블락 크기는 얼마로 설정되어 있을까요?

> 전체 파일 크기 : 533444411 B
> 평균 블락 크기 : 133361102 B
> 블락의 갯수 : 4
> HDFS 기본 블락 크기 : 128MB
>
> \- 별도의 블락 크기를 설정하지 않았다면, HDFS의 기본 블락 크기는 128MB이다.

#### HDFS 블락 크기 설정

```hdfs dfs -Ddfs.block.size=[size] [OPTION]``` 명령어를 통해 블럭사이즈를 변경 가능. 아래 결과는 블락 사이즈를 1MB로 변경한 결과 값이다. **기존 4개의 블락 갯수가 509개로 늘어난 것을 확인 할 수 있다.** 

![스크린샷 2020-10-27 오후 7.52.17](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.52.17.png)

### hdfs dfs -get \<localsrc> \<dst>

hdfs 에 존재하는 파일을 로컬 디스크로 복사한다. 

![스크린샷 2020-10-27 오후 7.53.25](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.53.25.png)

### **hdfs dfs -cat URI**

stdout에 파일 내용을 출력한다.

<img src="/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.55.05.png" alt="스크린샷 2020-10-27 오후 7.55.05" style="zoom:70%;" />

### **hdfs dfs -tail URI**

파일의 끝부분을 출력한다. 

![스크린샷 2020-10-27 오후 7.56.23](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.56.23.png)

### **hdfs dfs -df [-h] URI**

hdfs에서 디스크 가용 용량을 보여준다.

![스크린샷 2020-10-27 오후 7.56.44](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.56.44.png)

### **hdfs dfs -cp \<source> \<dest>**

hdfs내부 source경로에서 dest경로로 파일을 복제한다.

![스크린샷 2020-10-27 오후 7.58.08](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.58.08.png)

### **hdfs dfs -getfacl \<path>**

파일과 디렉토리의 Access Control 을 출략한다. 

![스크린샷 2020-10-27 오후 7.58.37](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 7.58.37.png)

### **hdfs dfs -setrep \<numReplicas> \<path>**

hdfs 파일 replica갯수를 바꿀 수 있다.

![스크린샷 2020-10-27 오후 8.03.16](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 8.03.16.png)

##### 파일의 replica 갯수를 바꾸는 명령어를 실행. 만일 replica 갯수를 3으로 설정한다면 어떻게 될까요? 그 이유를 서술해 주세요.

한개의 레플리카가 부족하다고 출력된다. 파일의 레플리카 갯수를 3개로 설정해 3개의 레플리카가 필요한데 현재는 2개의 레플리카만 가지고 있으므로 1개의 레플리카가 부족하다는 출력이 확인된다. (Misssing replicas) 이경우 복제본을 더 생성해 해당 문제를 해결 할 수 있다. 

### **hdfs dfs -rm [-f] [-r|-R] URI**

주어진 파일을 지움.

![스크린샷 2020-10-27 오후 8.04.27](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 8.04.27.png)

### hdfs dfsadmin -report

hdfs 시스템 상태를 알려주는 명령어.

![스크린샷 2020-10-27 오후 8.05.00](/Users/gilwoongkang/School/2002-note/빅데이터/bigdata_HDFS_Ass/image/스크린샷 2020-10-27 오후 8.05.00.png)