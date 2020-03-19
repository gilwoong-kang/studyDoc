## 임베디드 시스템설계

1007

##### Flash Memory

전류를 흘려보내면 트랩현상으로 인해 전류가 오래 갇히게 되는 원리를 이용해서 저장하는 방식이다.  

블럭이라는 단위를 이용한다. 이 블럭에는 몇 단위의 페이지의 합이 존재한다. 한 페이지는 1KB ~ 4KB로 구성된다. 

플래시 메모리에서 데이터를 지울때 블럭 단위로 지운다.

- Out-place update

  Erase-before write constraint

  Requires garbage collection

프리페이지가 없어지게 되면 프로그램이 몽땅 꼬일수도 있다. 

##### Multi-Level Cell flash![스크린샷 2019-10-07 오후 3.39.28](/Users/gilwoongkang/1903_note/임베디드/image/스크린샷 2019-10-07 오후 3.39.28.png)

##### Memory System Structiure

본래 요구하는 바를 받고 나서 처리하려고 하면 늦다. 이러한 것을 쓸것 같다고 추측해서 미리 빼서 전달한다. 

CPU보다 많이 느린 장치를 이용하기 위해서 이러한 예측 방법을 이용한다. 

소용량의 Cache를 두어서 이용한다.

![스크린샷 2019-10-07 오후 3.41.24](/Users/gilwoongkang/1903_note/임베디드/image/스크린샷 2019-10-07 오후 3.41.24.png)

##### Cache


![img](https://uc0546dbe34d7f50157f5fcb6b01.previews.dropboxusercontent.com/p/pdf_img/AAkppT45xjhVbE8HCRm3dMbkGlghm4YxpdZe2qQKRU8_6E-W-0iitI6ElP90UOhuvtKpQFrP9iGWykRMmbWb51uvNhq9f_AGdtOo_UnaacoIbiN81zlIO-Gd_ja320Nk72LggEEpqwmsd9D9udATMV1-TAVzWLOJphNGiTjyeU-TBvd7ywnvuGuBgXDhFLY4FCBocds0wi6mXJ9b1k6MTcCqt4W8G7RH8BX7CtDfi1ydli-_YWFpT2YYU5RFOk0ex_9UyL3eDwRfZnW5SFYJ_YKFQ6iKUmXixI7e_UZgHbHcH-UDIgK7P81iD4g3r2Sj3ov-o7PWWiV9x-Vt_fyTXQJI9GwIipokR7UKLNC0E-eokRyXfVFHqdl6XChH4FIsxEc7ppHJ_nXqg9hGjgWNTU-9Fnwp1Oiq_8p4or9gix6LWeTWMof62Z7XedNGXN0GfjUZQdi5Ir8DheROOmJl-SzH8SdbKFQMCoc13fDZ5CDanzxVeBIq0_Y2M56nrIXGROie7QEb-jGeglmbqEptUfDELPRK8-fEjmSg_tJ5OkBINXS9JZQy3NgH7F_EWo1UJkQ/p.png?page=14&scale_percent=0)



![스크린샷 2019-10-07 오후 3.58.38](/Users/gilwoongkang/1903_note/임베디드/image/스크린샷 2019-10-07 오후 3.58.38.png)

##### MMU(Memory Management Unit)

- 주소변환

  가상의 메모리를 이용하면서 실제로 이러한 메모리를 이용하고 있다고 착각하게 한다. 하지만 실제 메모리는 이것보다 작고, 메모리가 할당되지 않은 가상의 메모리는 디스크를 가리킨다. 

- 메모리 보호

  자기 영역만 접근 가능하도록 해서 메모리를 보호하는 역할을 한다.

##### Memory Controller

CPU 나 Memory에 대한 엑세스 등을 일단 메모리 컨트롤러가 다 받아내고 이것은 어느 부분이야 하는것을 이 메모리 컨트롤러가 판단하고 메모리에 대한 접근을 관장하게 된다. 

- Address decode

  Memory control signal (chip select)

- Address Multiplexing (for DRAM)

- Refresh operation (for DRAM)

  소프트웨어를 이용할때 버벅이거나 하는것을 방지하기 위해 한번씩 상기시킴

##### I/O devices