http = require('http');
fs = require('fs');
url =  require('url');
qs = require('querystring');

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

function templateHTML(title,list,string,control){
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
        ${control}
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
                var template = templateHTML(title,list,`<h2>${title}</h2>${description}`,`<a href="/create">create</a>`);
            response.writeHead(200);
            response.end(template);
            })
        }else{
            fs.readdir('./data',function(error,filelist){
                fs.readFile(`data/${queryDate.id}`,'utf8',function(err,description) {
                    var title = queryDate.id;
                    var list = templateList(filelist);
                    var template = templateHTML(title,list,`<h2>${title}</h2>${description}`,`<a href="/create">create</a><a href="/update">update</a>`);
                    response.writeHead(200);
                response.end(template);
                });
            });
    
        } 
    }else if(pathname == '/update'){
            fs.readdir('./data',function(error,filelist){
                var title = 'WEB - Update';
                var list = templateList(filelist);
                response.writeHead(200);
                response.end("Not FOund");
            })
    }else if(pathname =='/create'){
            fs.readdir('./data',function(error,filelist){
                var title = 'WEB - create';
                var list = templateList(filelist);
                var template = templateHTML(title,list,`
                <form action="http://localhost:3000/process_create" method="post">
                    <p><input type="text" name="title" placeholder="title"></p>
                <p>
                    <textarea name="description" placeholder="descrption"></textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
                </form>`);
                response.writeHead(200);
                response.end(template);
            })
        } else if(pathname == '/process_create'){
            var body = '';
            request.on('data',function(data){
                body = body + data;
            });
            request.on('end',function(){
                var post = qs.parse(body);
                var title = post.title;
                var description = post.description;

                fs.writeFile(`data/${title}`,description,'utf8',function(err){
                    response.writeHead(302,{Location: `/?id=${title}`});
                    response.end();
                })
            });
        }
        else {
        response.writeHead(404);
        response.end('Not found');}
});

app.listen(3000);