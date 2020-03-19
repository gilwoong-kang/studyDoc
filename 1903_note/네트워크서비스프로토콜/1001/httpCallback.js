const http = require('http');

const onRequest = (req,res) =>{
    console.log('request received.');
    res.write('<h1>Hello Node1!</h1>');
    res.end();
};

http.createServer(onRequest).listen(8080);
console.log('server has started.');