const url = require('url');

const {URL} = url;
const myURL = new URL('https://cs.kookmin.ac.kr/major/curricukun2019');
console.log('new URL():',myURL);
console.log('url.format():',url.format(myURL));
console.log('-------------------------');
const parsedUrl = url.parse('http://cs.kookmin.ac.kr/major/curriculum2019');
console.log('url.parse():',parsedUrl);

console.log('url.format():',url.format(parsedUrl));