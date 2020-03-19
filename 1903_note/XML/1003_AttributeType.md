## XML

1003 - 보강

##### Attribute Value Declarations

Default 값을 주고 Attribute 속성값을 설정할 수 있다.

```xml

<phone>001-234-567-8910</phone>
<phone kind=“Work”>001-234-567-8910</phone>
 
<!ELEMENT phone (#PCDATA)>
<!ATTLIST phone kind (Home | Work | Cell | Fax) “Home”> // 디폴트라면 Home을 넣음.
```



- Fixed values

```xml
<!ELEMENT contacts (contact*)>
<!ATTLIST contacts version CDATA #FIXED “1.0”>

<contacts version=”1.0”> 
<contacts version=”1.1”> <!-- error -->
```

FIx된 값은 이외의 값을 넣을경우 에러가 난다. 

- \#REQUIRED , \#IMPLIED

  –  When declaring that an attribute is required, you are not permitted to specify a default value.

  –  If the attribute you are declaring has no default value, no fixed value, and is not required, then you must declare that the attribute is*implied*.

많은 경우에 DBMS에서 xml파일을 내보내고 이를 전송하고 전송받아 해석해서 이용한다.

##### Entity Declarations

- Four types of entites

  항상 이름 부여 및 엔티티 이용에서는 &___; 의 형식을 이용한다.

  1. Built-in entity : &amp:,\&gt;,\&lt,\&apos;,\&quot;

  2. Charater (Unicode) : \&#nnn; (decimal), \&#xnnn;(hexadecimal)

  3. General

     어떠한 스트링 하나에 이름을 부여한다. Ex) &source-text;

  4. Parameter

     \<!ENTITY % ______> ->xml / %___; -> dtd

##### DTD Limitations 

DTD는 xml이 아니다. xml을 이용하기 위해 정의문일 뿐이다. (유사 c++ header file.) EBNF의 형태를 띈다.

텍스트만 인식하기 때문에 제한적이다. 

네임스페이스 기능에 대한 제공이 어렵다.

- Limited content model descriptions

  ​	Limited support of cardinality

  ​	No ability to describe new objects in terms of existing ones. (no support of inheritance)

#### XML Schema(XSD)

##### Benefit of XML Schema

XSD는 xml파일이기 때문에 parser가 xml만으로도 해석이 가능하다. 또한 네임스페이스도 이용 가능하며, 데이터 타입또한 매우 다양하다. 즉, 굉장히 정교하다고 할 수있다. 

Type 

- Simple type
- Complex type

Content Model또한 정교하게 만들 수 있으며 Reuse 또한 가능하다.

Datatype definitions : 새로운 타입을 만든다.(정의한다.)

Content model declarations : 콘텐트 모델을 설정한다.(선언)

***모든 엘리먼트와 어트리뷰트는 매칭되는 데이터 타입이 존재한다.***