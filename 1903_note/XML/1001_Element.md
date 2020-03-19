## XML

1001

##### Element

```xml
<!ELEMENT description (#PCDATA|title|detail)*>
<!ELEMENT description (#PCDATA|detail|title)*> // 동일함

<!ELEMENT description (title|#PCDATA|detail)*> // error
```

스트링을 중간에 넣으면 에러가 난다. 반드시 맨앞에 넣을 것.(#PCDATA)

##### Empty Content

```xml
<!ELEMENT br empty>

<!ELEMENT ANY>
```

empty의 경우 한줄 비우겠다는 뜻이고, ANY의 경우엔 어떠한 형태든 몇번 나오든 괜찮다는 의미이다.

dtd에서 선언할때 형태는 정수나 실수를 받을수 없다. 그저 스트링의 형태만 받을 뿐이다.

##### Attribute Types - ID (중요)

CDATA(string),ID,IDREF,IDREFS,ENTITY,EMTITIES,NMTOKEN,NMTOKENS,Enumerated list

![스크린샷 2019-10-01 오후 2.11.16](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-10-01 오후 2.11.16.png)

***프라이머리키는 ID 포린키는 IDREF, 만일 포린키로 오는것이 여러개 라면 IDREFS로 선언하여 이용한다.***

![스크린샷 2019-10-01 오후 2.34.43](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-10-01 오후 2.34.43.png)

NMTOKEN은 스트링인데, 공백이 존재하지 않는 스트링이다.