function fact(n){
    if(n <= 1) return n;
    return n*fact(n-1);
}

function sum(n,m){
    var result = 0;
    for(var i = n; i<m;i++){
        result += i;
    }
    return result;
}

var person = {name:"홍길동",age:23,sex:"남"};

console.log("이름 : "+person.name);
console.log("성별 : "+person.sex);
console.log("홍길동 님의 5년후 나이는 "+(person.age+5)+" 입니다.");

person.married = false;

console.log(person);