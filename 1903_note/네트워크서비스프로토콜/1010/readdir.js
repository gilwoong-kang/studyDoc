http = require('http');
fs = require('fs');
url =  require('url');
function templateList(filelist){
    var list = '<ul>';
                var i =0;
                while(i< filelist.length){
                    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i = i+1;
                }
                list = list+`</ul>`;
    return list;
}

function templateHTML(title,list,string){
    var template = `
    <!doctype html> 
    <html>
    <head>
        <title>노드 웹서버 - HTML</title>
        <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/">${title}</a></h1> 
        ${list}
    ${string}
    <p>동적인 웹페이지 기초 만들기 만들 준비되셨나요?</p> 
    </body>
    </html>
    `;
    return template;
}
var app = http.createServer(function (request,response) {
    var _url = request.url;
    var queryDate = url.parse(_url,true).query;
    var pathname = url.parse(_url,true).pathname;
    var title = queryDate.id;

    if(pathname === '/'){
        if(queryDate.id === undefined){
            fs.readdir('./data',function(error,filelist){
                var title = 'Home';
                var description = 'Hello node js';
                var list = templateList(filelist);
                var template = templateHTML(title,list,`<h2>${title}</h2>${description}`);
            response.writeHead(200);
            response.end(template);
            })
        }else{
            fs.readdir('./data',function(error,filelist){
                fs.readFile(`data/${queryDate.id}`,'utf8',function(err,description) {
                    var title = queryDate.id;
                    var list = templateList(filelist);
                    var template = templateHTML(title,list,`<h2>${title}</h2>${description}`);
                    response.writeHead(200);
                response.end(template);
                });
            });
    
            } 
        }else {
        response.writeHead(404);
        response.end('Not found');}
});

app.listen(3000);