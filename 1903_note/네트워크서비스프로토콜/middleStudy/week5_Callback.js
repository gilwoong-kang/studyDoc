function findUser(id,callback){
    const user = {
        id : id,
        name : "User" + id,
        email : id + "@test.com"
    };
    callback(user);
}

findUser(1,function(user){
    console.log("user:",user);
});

const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(request,response){
    var urlparse = url.parse(request.url,true);
    var path = urlparse.pathname;
    var queryData = urlparse.query;

    if(path == '/' && queryData.id == undefined){
        var title = "home";
        var description = "des";
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
                                    <li><a href="/?id=Address">Address</a></li> 
                                </ul>
                            <h2>${title}</h2>
                            <p>${description}</p>
                            <p>동적인 웹페이지 기초 만들기 만들 준비되셨나요?</p> 
                        </body>
                    </html>
                 `;
        response.writeHead(200);
        response.end(template);
    } else if(path =='/' && queryData.id != undefined){
        response.write("Address");
        fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
            response.writeHead(200);
            response.end(description);
        });
    }
    else{
        response.end("Not found");
    }
}).listen(8080);