## XML

0924

##### URI(Unoform Resource Identifier)

- URL(Uniform Resource Locator)

  인터넷 상에서 접근 할 수 있는 모든 것 이라고 칭할 수 있다. 단순히 하드디스크에서의 자원을 벗어나 많은 것을 자원이라 칭한다. 

  Format = [Scheme]://[Domain]:[Port]/[Path]?[QueryString]#[FragmentId]

  컴퓨터가 찾아갈수 있는 장소에 있는것.

- URN (Universal Resource Name)

  Urn:NID:NSS

  NID(Namespace Identifier)

  NSS(Namespace Specific String)

  EX)

  Isbn:9780470114872

##### Default Namespace

- Clerk notation

  네임스페이스 이름 + 엘리먼트 이름을 지정해 더욱 유니크한 것을 만들었다. 이것은 네임스페이스의 이름과 함께 사용해야만 접글할 수 있다.

  Ex)

  {http://wrox.com/namespaces/applications/hr/config}applicationUsers

  {http://wrox.com/namespaces/applications/hr/config}user

  하지만 내 문서안에서 쓸건데 이렇게 네임스페이스가 길 필요는 없다. 때문에 prefix를 이용한다.

  ##### Qualified name

  ```xml
  <hr:applicationUsers
  xmins:hr="http://wrox.com/namespaces/applications/hr/config">
  <hr:user firstName = "Joe" lastName="fawcett"/>
  ...
  ```

##### Namespace에 대한 prefix가 두개 이상인 경우

두가지 방안이 있는데, 첫번째는 처음 하나는 default로 해놓고 그 뒤부터는 이름을 다는것.두번째는 default 네임스페이스를 사용하지 않고 모두 이름을 다는것.

![스크린샷 2019-09-24 오후 2.22.48](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-09-24 오후 2.22.48.png)

보통은 전자를 이용한다.

만일 네임스페이스가 다른 레벨에서 이중으로 default선언되어 있다면 바로 상위 네임스페이스를 따른다.(한 지역에 두개의 디폴트가 아니고 겉과 안의 개념) 이것은 오류가 나지 않는다. 

##### Default namespace의 Cancle

![스크린샷 2019-09-24 오후 2.29.51](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-09-24 오후 2.29.51.png)

디폴트에 선언되었던 네임스페이스 prefix가 지워진다.

한 라인에 디폴트가 두번 선언되어서는 안된다. 단 한라인에 디폴트 + 다른 네임스페이스 선언은 가능하다.

어트리뷰트에는 네임스페이스를 일반적으로 붙이지 않는다. 하지만 붙여도 상관은 없다. 

##### 글로벌 어트리뷰트  

![스크린샷 2019-09-24 오후 2.38.16](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-09-24 오후 2.38.16.png)

글로벌 어트리뷰트는 어떠한 장소에서도 붙을 수 있다. 외부에서 정의한 것이기 때문이다.