// 외부 변수 등을 이용할때 해당 변수에는 exports를, 
// 가져오는 함수는 require();

const foo = require('./foo');
console.log(foo.a);

// 외부 함수를 사용하고자 할때 함수를 선언하고 
// module.exports 해줘야 한다.
const checknum = require('./fun');
foo(10);