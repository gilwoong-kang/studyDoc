const http = require('http');
const url = require('url');

http.createServer((request,response) => {
    console.log(request,url);
    const parsedUrl = url.parse(request.url);
    const resource = parsedUrl.pathname;

    console.log('resource path=%s',resource);

    response.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});

    if(resource == '/') response.end('안녕하세요');
    else if(resource == '/address') response.end('서울 특벌시 간남구 논현1동 111');
    else if(resource == '/phone') response.end('phone');
    else if(resource == '/nane') response.end('name');
    else response.end('404 Not Found');
}).listen(8080,() => {
    console.log('server is running...');
});
