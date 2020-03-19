var circle = { center : {x:1,y:2},radius : 2.5};

console.log( circle.center.x + "," + circle.center.y);
console.log(circle.radius);

function area(){
    return Math.PI * circle.radius*circle.radius;
}

function round(){
    return Math.PI * 2 * circle.radius;
}

console.log(area());
console.log(round());