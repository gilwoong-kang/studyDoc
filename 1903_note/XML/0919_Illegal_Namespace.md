## XML

##### Illegal Characters(in Element and Attribute Content)

1. Entitiy reference

태그 시작문자가 <이며 다른 특수문자등 (Ex &) 을 내용에 적어야 하는 경우 이를 알아보기 위한 방법이 필요하다. 그래서 String 으로 대체해서 작성한다.

| Characters | Reference |
| ---------- | --------- |
| &          | \&amp;    |
| <          | \&lt;     |
| >          | \&gt;     |
| *          | \&quot;   |
| ''         | \&apos;   |
| 공백       | \&nbsp    |

![스크린샷 2019-09-19 오후 1.44.47](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-09-19 오후 1.44.47.png)

유니코드로도 가능하다.

2. CDATA

```xml
<![CDATA[ any-text]]>
```

*CDATA의 형태*

이 태그 안에 작성한 text는 어떠한 명령에도 동작 하지 않는다. 그대로 display한다. 이 형태는 HTML등에서 타 언어를 작성하는등의 형태일때 사용한다.

##### White space

HTML은 공백이 몇개가 연속으로 나오던 간에 하나의 공백만 출력한다. 그런데 태그를 \<pre> 사용하면 제대로 인식이 된다.

한편 XML은 이러한 공백이 모두 보존되는데 태그 안에 Attribute

```xml
xml:space="preserve"
```

을 추가 하면 white charcter 와 공백을 보존한다. 이는 특수한 Attributre이다.

##### NameSpace

태그 사용시 다른 부분(다른 언어 작성) 등의 문제에서 네임스페이스의 네임이 겹칠때가 있다.

*Ex*)

![스크린샷 2019-09-19 오후 2.29.45](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-09-19 오후 2.29.45.png)

네임스페이스 이름을 URL을 이용해 작성하면 유니크하게 작성이 가능하다.
$$
\frac {12} {34}
$$
