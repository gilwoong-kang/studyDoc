var http = require('http');
var url = require('url');

var template = `<!DOCTYPE html> 
    <html>
        <head>
            <meta charset="UTF-8"> <title>url 서버를 이용한 여러 페이지 만들기</title>
            <script>
                window.onload = function() {
                    var addressButton = document.getElementById("addressButton");
                    var phoneButton = document.getElementById("phoneButton");
                    addressButton.onClick(function(err){
                        
                    })
                }
            </script>
        </head>
    <body>
        <input type="button" value="address" id="addressButton"> 
        <input type="button" value="phone" id="phoneButton"> 
    </body>
    </html>`

http.createServer((request,response) => {
    var urlParse = url.parse(request.url);
    var pathname = urlParse.pathname;

    if(pathname == '/'){
        response.end(template);
        console.log(pathname);
    }else if(pathname == '/address'){
        response.end("address");
        console.log(pathname);
    } else if(pathname == '/phone'){
        response.end("phone");
        console.log(pathname);
    } else {
        response.end("Not Found 404");
        console.log(pathname);
    }
}).listen(3000);