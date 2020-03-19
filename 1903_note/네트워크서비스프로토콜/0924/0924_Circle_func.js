const radius = require('./0924_Circle');
const center = require('./0924_Circle');

area = () => (Math.PI*radius*radius);
round = () => (2*Math.PI*radius);
translate = (a,b) => {
    center.x+=a;
    center.y+=b;    
}

module.exports = area;
module.exports = round;
module.exports = translate;