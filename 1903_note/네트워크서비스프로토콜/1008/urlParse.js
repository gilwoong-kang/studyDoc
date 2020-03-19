http = require('http');
fs = require('fs');
url =  require('url');

var app = http.createServer(function (request,response) {
    var _url = request.url;
    var queryDate = url.parse(_url,true).query;
    var pathname = url.parse(_url,true).pathname;
    var title = queryDate.id;

    if(pathname === '/'){
        if(queryDate.id === undefined){
        var title = 'Home';
        var description = 'Hello node js';
        var template = `
            <!doctype html> 
                <html>
                <head>
                    <title>노드 웹서버 - HTML</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="/">${title}</a></h1> 
                        <ul>
                            <li><a href="/?id=HTML">HTML</a></li> 
                            <li><a href="/?id=CSS">CSS</a></li> 
                            <li><a href="/?id=javaScript">JavaScript</a></li>
                        </ul>
                    <h2>${title}</h2>
                    <p>${description}</p>
                    <p>동적인 웹페이지 기초 만들기 만들 준비되셨나요?</p> 
                </body>
            </html>
         `;
        response.writeHead(200);
        response.end(template);
        }else{
            fs.readFile(`data/${queryDate.id}`,'utf8',function(err,description) {
                var template = `
                    <!doctype html> 
                        <html>
                        <head>
                            <title>노드 웹서버 - HTML</title>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <h1><a href="/">${title}</a></h1> 
                                <ul>
                                    <li><a href="/?id=HTML">HTML</a></li> 
                                    <li><a href="/?id=CSS">CSS</a></li> 
                                    <li><a href="/?id=javaScript">JavaScript</a></li>
                                </ul>
                            <h2>${title}</h2>
                            <p>${description}</p>
                            <p>동적인 웹페이지 기초 만들기 만들 준비되셨나요?</p> 
                        </body>
                    </html>
                 `;
                response.writeHead(200);
                response.end(template);
            });
    
            } 
        }else {
        response.writeHead(404);
        response.end('Not found');}
});

app.listen(3000);