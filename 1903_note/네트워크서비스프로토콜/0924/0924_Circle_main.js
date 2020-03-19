 
var { center, radius } = require('./0924_Circle'); 
var area = require('./0924_Circle_func');
var round = require('./0924_Circle_func');
var translate = require('./0924_Circle_func');
console.log("원의 중심좌표는 (" + center.x + "," + center.y + ")");
console.log("원의 면적은 " + area() + "입니다.");
console.log("원의 둘레는 " + round() + "입니다.");
translate(1,2);
console.log("(1,2)이동한 원의 중심좌표는 (" + center.x + "," + center.y + ")");

// 안됌.