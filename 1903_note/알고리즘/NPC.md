## 알고리즘

#### NP-completeness

<img src="/Users/gilwoongkang/Library/Application Support/typora-user-images/image-20191207000106930.png" alt="image-20191207000106930" style="zoom:50%;" />

다항 알고리즘으로 풀수 있다면 tractable, 풀 수 없다면 intractable이다. npc의 문제는 intractable할 것으로 추정되나 증명이 되지 않은 문제들이다. 

##### NPC의 예

1. 주어진 수 이상의 edge를 갖는 단순 경로가 그래프에 존재하는지를 판별하는 문제 
2. Hamiltonian cycle : 모든 vertex를 포함하는 simple cycle이 존재하는지 판별하는 문제

 NP-완전 문제 중 하나라도 P에 속한다는 것을 증명한다면 모든 NP 문제가 P에 속하기 때문에, P-NP 문제가 P=NP의 형태로 풀리게 된다. 반대로 NP-완전 문제 중의 하나가 P에 속하지 않는다는 것이 증명된다면 P=NP에 대한 반례가 되어 P-NP 문제는 P≠NP의 형태로 풀리게 된다.

##### NP-hard

