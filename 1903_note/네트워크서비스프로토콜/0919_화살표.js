var circle = {
    center : {x:1.0, y:2.0} ,
    radius : 2.5,
};
console.log("원의 중심좌표는 (" + circle.center.x + "," + circle.center.y + ")");
const area = (rad) => rad*rad*Math.PI;

const round = (rad) => 2*rad*Math.PI;

console.log("원의 면적은 " + area(circle.radius).toFixed(2) + "입니다.");
console.log("원의 둘레는 " + round(circle.radius).toFixed(2) + "입니다.");

const translate = (a,b) => {
    circle.center.x = circle.center.x + a;
    circle.center.y = circle.center.y + b;
};
translate(1,2);
console.log("(1,2)이동한 원의 중심좌표는 (" + circle.center.x + "," + circle.center.y + ")");