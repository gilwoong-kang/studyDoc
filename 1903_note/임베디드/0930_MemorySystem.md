## 임베디드시스템설계

0930

##### Memory System

- Role

  두가지 정도의 역할을 볼 수 있다.

  1. Workspace

     SRAM,DRAM,Cache,Register

  2. Permanent storage for program and data

     Hard disk,SSD ...

CPU가 보기에 Memory는 거대한 주소 체계 정도로 보인다. 

한 때 32bit의 OS시스템에서 물리적인 메모리 주소 파악에 대한 문제로 메모리를 인식하지 못하던 문제가 존재했는데 이것을 64bit로 전환하면서 물리적인 문제는 거의 해결 되었다. 

##### Memory Hierarchy 

메모리 시스템에서 CPU에게 가상의 메모리 공간을 모두 사용하고 있다는 착각을 걸어 이용한다. 속도와 용량을 효과적으로 확보하기 위해 memory hierarchy를 이용한다. 

- Locality of reference

  - Temporal Locality

    최근 접근한 것에 대해서 다시 접근할 확률이 높다

  - Spetial Locality

    사용한것 바로 옆에 것을 이용할 확률이 높다.

##### Memory Taxonomy

![스크린샷 2019-09-30 오후 3.54.36](/Users/gilwoongkang/1903_note/임베디드/image/스크린샷 2019-09-30 오후 3.54.36.png)

![스크린샷 2019-09-30 오후 4.06.46](/Users/gilwoongkang/1903_note/임베디드/image/스크린샷 2019-09-30 오후 4.06.46.png)![스크린샷 2019-09-30 오후 4.07.07](/Users/gilwoongkang/1903_note/임베디드/image/스크린샷 2019-09-30 오후 4.07.07.png)

SRAM에 비해 동일 면적대비 많은 용량가진다. SRAM에 비해 저렴함.

![스크린샷 2019-09-30 오후 4.10.22](/Users/gilwoongkang/1903_note/임베디드/image/스크린샷 2019-09-30 오후 4.10.22.png)

기본적으로 트랜지스터이다.(발이 세개) 즉 스위친데, 플래시 메모리는 조금 다르게 스위치를 메모리로 사용할 수 있게 만든 것이다.

비 휘발성인데, 이것은 복잡하게 프로그래밍 되어있다는 것을 의미하기도 한다. 

플래시 스토리지는 언제 날아가도 이상하지 않기 때문에 주의해야 한다.