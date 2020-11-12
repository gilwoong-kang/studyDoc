<div style="text-align:center;font-size:2em;">빅데이터 플랫폼 </br></div><div style="font-size: 1em; text-align: center;">HDFS Block Size</div></div><div style="font-size: 1em; text-align: center;">NameNode 오버헤드와 MapReduce 작업 관점에서</div>

<div style="text-align:right;">소프트웨어전공</br>20152791 강길웅</div>

---

### NameNode 와 BlockSize

#### 메모리 오버헤드

NameNode는 블락 관련 메타데이터를 메모리에서 관리한다. 때문에 가지고 있을 수 있는 메타데이터가 한정되어 있는데 블락의 사이즈를 줄이게 되면 파일당 블락 갯수가 증가하게 되고 이는 메타데이터의 양을 증가시켜 NameNode의 오버헤드를 유발하는 것이다. 한 가지 예를 보자.

```
1 GB의 파일이 존재합니다. 이를 64MB의 블락사이즈와 1MB의 블락사이즈로 관리한다고 생각해봅시다.
Block Size = 64MB
Block = 16
Total Item = 16*3(일반적으로 레플리카를 3개 가지므로) = 48
48 + 1(파일 네임 관련 데이터) = 49
일반적으로 각 오브젝트 / 항목은 150바이트 ~ 200바이트를 가지므로 
Total NameNode memory = 150*49 (바이트)

Block Size = 1 MB
Block = 1024
Total Item = 1024*3 = 3072 + 1024(파일 네임 관련 데이터) = 4096
Total NameNode memory = 150 * 4096(바이트)
```

위 결과를 통해 메타데이터의 증가로 메모리의 더 많은 공간을 차지하므로 NameNode 메모리 및 네트워크 등의 오버헤드가 발생하는 것을 확인 할 수 있다. 

#### 탐색 시간의 관점에서

NameNode는 블락의 시작점에 대한 메타데이터들을 가지고 있다. 만일 블락의 크기를 줄이게 된다면 블락의 숫자가 늘어나게 될 것이고 이에따라 블락의 시작점 정보인 메타데이터도 증가하게 된다. 이에따라 원하는 블락을 찾는 탐색 시간이 늘어나게 되는 것이다. 때문에 탐색 시간을 줄이기 위해 블락 하나의 사이즈를 128MB같이 크게 잡는 것이다. 

### MapReduce 작업

MapReduce작업시 블락 단위로 진행된다. 때문에 블락 사이즈가 증가한다면 그만큼 하나의 작업 속도가 저하됨을 의미한다. 

### 결론

NameNode의 오버헤드의 문제 및 탐색 시간 문제로 블락 사이즈를 크게 하는것이 NameNode측면에서 좋다. 하지만 너무 크게 잡을 경우 MapReduce 명령어 처리시간이 오래 걸리게 되므로 적절한 크기를 설정하는 것이 바람직하다. 