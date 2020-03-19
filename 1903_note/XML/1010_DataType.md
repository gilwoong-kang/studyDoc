## XML

1010

##### Derived Datatypes

![스크린샷 2019-10-10 오후 2.29.30](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-10-10 오후 2.29.30.png)

데이터 타입에 대한 세부 설정같은 것으로 볼수 있다. *Token NMTOKEN NMTOKENS Name NCname ID IDREF IDREFS ENTITY ENTITIES Integer long int short byte* 등 타입에 대한 세부설정이 가능하다.

*Ex)*

![스크린샷 2019-10-10 오후 1.38.38](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-10-10 오후 1.38.38.png)

##### Regular Expressions

```xml
[0-9]  // Atom 범위를 말한다.
{3} // quantifier 몇번 반복되는지에 대함.
<pattern value="[0-9]{3}-[0-9]{2}-[0-9]{4}"/>
```

##### Type Definition Hierarchy

![스크린샷 2019-10-10 오후 1.49.04](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-10-10 오후 1.49.04.png)

- Token

  스페이스가 두개 연속으로 나오는 경우는 없다. 하나만 나오도록 한다.

- normalizedString

  공백에 대해 space를 부여하도록 하는 타입.

위 두가지는 공백에 대한 타입 지정으로 \<whiteSpace value=""/>가 지정된다.

![스크린샷 2019-10-10 오후 2.05.35](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-10-10 오후 2.05.35.png)

- NMTOKEN

  \c+ 

- NMTOKENS

  토큰의 집합 리스트

토큰의 경우 \<pattern value="..."/>를 지정해준다. **\i 란 캐릭터형을 지칭하고, \c란 문자 또는 숫자형을 의미한다.**

- Name

  \i\c*

- NCName

  \[\i-\[:]][\c-[:]]*

- ID

  \<restriction base="xs:NCName"/>

- IDREF

  \<restriction base="xs:NCName"/>

- IDREFS

  ID의 집합. 리스트

- ENTITY

  \<restriction base = "xs:NCName"/>

- ENTITIES

  엔티티의 리스트

- Language

  \<pattern value="[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*"/>

  앞 두글자는 반드시 나온디.  "en-US"와 같이 지정한다.

#### DataType Definitions

##### Elements for Type Definition

![스크린샷 2019-10-10 오후 2.25.45](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-10-10 오후 2.25.45.png)

##### Simple Type Definitions

심플 타입은 일단 Restriction기반의 타입 이다. 점점 줄어드는 것.

- Restriction Type 
- List type
- Union type

*Ex)*

![스크린샷 2019-10-10 오후 2.31.49](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-10-10 오후 2.31.49.png)

- List type

  \<list itemType = "QName of the simple type"/>

![스크린샷 2019-10-10 오후 2.41.52](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-10-10 오후 2.41.52.png)

- Union

  성격이 다른 두개의 타입을 합치는 것을 뜻함.

![스크린샷 2019-10-10 오후 2.42.46](/Users/gilwoongkang/1903_note/XML/image/스크린샷 2019-10-10 오후 2.42.46.png)

