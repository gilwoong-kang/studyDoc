var circle = {center:{x:1,y:2},radius:2.5};

console.log("원의 중심좌표는 (" + circle.center.x+","+circle.center.y+")");
console.log("원의 반지름은 " + circle.radius);

function area(rad){
    return rad*rad*Math.PI;
}
function round(rad){
    return 2*rad*Math.PI;
}

console.log("원의 면적은 "+area(circle.radius).toFixed(2)+"입니다.");
console.log("원의 둘레는 "+round(circle.radius).toFixed(2)+"입니다.");

circle.translate = function(a,b){
    this.center.x = this.center.x + a;
    this.center.y = this.center.y + b;
};
circle.translate(1,2);
console.log("이동한 원의 중심좌표는 (" + circle.center.x+","+circle.center.y+")");