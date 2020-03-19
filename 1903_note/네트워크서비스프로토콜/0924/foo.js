exports.a = 10;

function check(num) {
    if(num % 2){
        console.log("홀수");
    }
    console.log("짝수");
}
module.exports = check; // 모듈 선언