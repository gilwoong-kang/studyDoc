## XML

0910

해당 강의는 슬라이드에서 데이터 파일은 회색 바탕으로, 입출력 관련은 파란색 바탕으로 이미지 배경색이 지정되어있으니 참고해서 보면 된다.

#### Document Type

보내는 사람과 받는 사람이 타입을 알고있고 둘 모두 체킹을 하면 결함없는 데이터를 통신할수 있다.

- Vocabulary : 요소나 상태에 대한 구체적인 단어 명시가 존재한다.
- Hierarchy : 계층 구조가 존재할 수 있다.
- Rules : 순서가 뒤바꾸면 안되거나, 누락된 것이 존재하면 안되는  등의 규칙에 대한 것이다. 

*- 예시*

```xml
<PersonName honorific=“Mr.” suffix=“Jr.”> <FirstName>John</FirstName> <MiddleName>Q</MiddleName> <LastName>Public</LastName>
</PersonName>
```



DTD로 작성한 Document는 XML이 아니지만 XML Schema로 작성한 Document는 이미 XML이다. 

내가 정의한 개념(이름)이 남들이 봤을때 쉽게 이해가 가능하도록 Document를 구성해야한다. 

단어에 대한 정의에서 약어를 사용하는 것은 금한다. 그것을 보고 유추해야 하며 다른것으로 해석될 여지가있기 때문이다. 단어의 길이 및 개수에 큰 영향이 없으므로 짧게 적거나 약어를 사용해 정의하지 않는다. 

##### Industry-standard vocabulary

Scorm - 교육용 웹 규약 등

SVG - 그래픽 관련 툴 등

MusicML - Symphony 등 악보관련 XML

MPEG - multi media 관련 Mark up language

##### Data-Centric vs Document-Centric Uses of XML

실제 데이터 처리 중심이냐 Document 중심이냐에 따라 두가지로 나뉜다.

대부분의 비지니스적인 파일이나 데이터는 대부분 XML을 이용해 정보를 주고 받는다.

##### XML Parsers

윈도우 환경에서 제작하며 Parsing을 할경우에는 MSXML을 이용한다. 하지만 이외의 Java를 이용한다거나 LInux, Unix 를 이용하는등 대부분의 환경에서는 Xerces를 이용한다.

##### The Document Object Model (DOM)

받아온 XML을 이용하기 위해 메모리를 이용해야 하는데 그때 이 DOM이라는 형식으로 메모리에 로딩하는 것이 일반적이며 효율적이다. 대부분의 XML형식 파일은 이 DOM 이라는 형식을 이용한다.



> *XML을 이해하기 위해 Parsers 와 DOM 의 개념은 기본적으로 이해하고 있어야 한다.*



##### XPath

XML 파잍내에서의 오타등의 문제로 수정이 필요하거나 할때 파일을 직접 수정하는 것이 아닌 프로그래밍으로 수정할 경우 Path를 이용해서 수정해야 할텐데 그때 이용하는 것이 이 XPath이다. XML파일의 특정 부분을 지정하는 것이다. 

```xml
<applicationUsers>
<user firstName=”Joe” lastName=”Fawcett”/>
<user firstName=”Danny” lastName=”Ayers”/>
<user firstName=”Catherine” lastName=”Middleton”/>
</applicationUsers>
```

```xml
/applicationUsers/user[2] 
```

*- 예시*

##### XSLT

작성된 XML을 HTML등의 파일로 이용하기 위해 프로그램을 거쳐 작성된 것을 변환해야 하는데 그때 XSLT를 하게 된다. 이것은 프로그래머가 작성한다.

*appUsersWithXslt.xml*

```xml
<?xml-stylesheet type=”text/xsl” href=”appUsers.xslt” ?>
<applicationUsers>
<user firstName=”Joe” lastName=”Fawcett”/>
<user firstName=”Danny” lastName=”Ayers”/>
<user firstName=”Catherine” lastName=”Middleton”/>
</applicationUsers>
```

appUsersWithXslt.xml -> appUsers.xslt -> appUsers.xhtml

위의 과정을 거쳐서 변환되는 것이다. xml파일을 xslt에 입력해서 xhtml파일을 얻게 되어 출력한다.

XSL Transfer 라는 프로그램이 존재하는데 해당 프로그램은 XML과 XSLT를 가지고 출력물을 만든다. 이 프로그램은 웹 브라우저가 이미 내장으로 가지고 있다. 때문에 XML 이나 XSLT를 가지고 있다면 바로바로 출력을 만들 수 있는 것이다.

##### XQuery

만일 DBMS에서 XML파일이 존재할 경우 이 XML파일 내부의 것은 SQL문으로 접근할수 없다. 때문에 XML파일에 대한 접근을 위해 SQL을 확장해야만 가능한데, XML을 접근하기 위한 것이 이 XQuery이다. 
