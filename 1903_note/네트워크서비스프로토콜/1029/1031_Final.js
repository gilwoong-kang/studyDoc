var http = require('http');
var fs = require('fs');
const url = require('url');
var qs = require('querystring');

var testFolder = './data';
    fs.readdir(testFolder, function(error, filelist) {
        console.log(filelist);
    })

http.createServer((request, response) => {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname == '/') {
        if(queryData.id == undefined) {
            fs.readdir('./data', function(error, filelist){
                var title = 'Home';
                var description = 'Hello, Node.js!';
                var list = template.list(filelist);
                var html = template.HTML(title, list, `<h2>${title}</h2>${description}`, `<a href="/create">create<a>`);
                response.writeHead(200);
                response.end(html);
            });
        } else {
            fs.readdir('./data', function(error, filelist){
                fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description){
                    var title = queryData.id;
                    var list = template.list(filelist);
                    var html = template.HTML(title, list, 
                        `<h2>${title}</h2>${description}`, 
                        `   <a href="/create">create<a>
                            <a href="/update?id=${title}">update</a>
                            <form action="delete_process" method="post">
                                <input type="hidden" name="id" value="${title}">
                                <input type="submit" value="delete">
                            </form>`
                    );
                    response.writeHead(200);
                    response.end(html);
                 });
            });
        }
    } else if(pathname == '/create') {
        fs.readdir('./data', function(error, filelist) {
            var title = 'WEB - create';
            var list = template.list(filelist);
            var html = template.HTML(title, list, `
            <form action="http://localhost:8080/process_create" method="POST">
                <p>
                    <input type="text" name="title" placeholder="title">
                </p>
                <p>
                    <textarea name="description" placeholder="description"></textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
            `, '');
            response.writeHead(200);
            response.end(html);
        });
    } else if (pathname == '/process_create') {
        var body = '';
        request.on('data', function(data){ //데이터를 버퍼단위로 가져와 쌓는다.
            body = body + data;
        });
        request.on('end', function(){ // 저장된 데이터를 보낸다.
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;

            fs.writeFile(`./data/${title}`, `${description}`, 'utf-8', (err) => {
                if(err) {
                    throw err;
                }
                response.writeHead(302, {Location: `/?id=${title}`});
                response.end();
            });
        });
    } else if(pathname == '/update') {
        fs.readdir('./data', function(error, filelist){
            fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description){
                var title = queryData.id;
                var list = template.list(filelist);
                var html = template.HTML(title, list,
                    ` <form action = "/update_process" method="post">
                        <input type=hidden name=id value=${title}>
                        <p><input type="text" name='title' placeholder = 'title' value='${title}'></p>
                        <p><textarea name="description" placeholder = 'description'>${description}</textarea></p>
                        <p><input type="submit"></p>
                    </form> ` 
                    ,
                    `<a href="/create">create<a> <a href="/update?id=${title}">update</a>`);
                
                response.writeHead(200);
                response.end(html);
             });
        });
    } else if(pathname == '/update_process') {
        var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;

            fs.rename(`data/${id}`, `data/${title}`, function(error) {
                fs.writeFile(`./data/${title}`, `${description}`, 'utf-8', (err) => {
                    if(err) throw err;
                    response.writeHead(302, {Location: `/?id=${title}`});
                    response.end();
                });
            });
        });
    } else if(pathname== '/delete_process') {
        var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var id = post.id;

            fs.unlink(`data/${id}`, function(err) {
                if(err) throw err;
                response.writeHead(302, {Location: `/`});
                response.end();
            });
        });
    } else {
        response.writeHead(404);
        response.end('Not found');
    }

}).listen(8080, () => {
    console.log('Server is running...');
});


var template = {
    HTML :  function(title, list, string, control) {
        var template = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>노드 웹서버</title>
            </head>
            <body>
            
            <h1><a href="/">WELCOME ${title}</a></h1>
            ${list}
            ${control}
            ${string}
                
            </body>
            </html>
        `; 
        return template;
    },
    list : function(filelist) {
        var list = '<ul>';
        for(var i =0; i < filelist.length; ++i) {
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
        }
        list += '</ul>';

        return list;
    }

}


// function templateList(filelist) {
    
//     var list = '<ul>';
//     for(var i =0; i < filelist.length; ++i) {
//         list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
//     }
//     list += '</ul>';

//     return list;
// }

// function templateHTML(title, list, string, control) {
    
//     var template = `
//     <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <meta http-equiv="X-UA-Compatible" content="ie=edge">
//             <title>노드 웹서버</title>
//         </head>
//         <body>
        
//         <h1><a href="/">WELCOME ${title}</a></h1>
//         ${list}
//         ${control}
//         ${string}
            
//         </body>
//         </html>
//     `; 
//     return template;
// }