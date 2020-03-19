var http = require('http');
var mysql = require('mysql');
var url = require('url');
var qs = require('querystring');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'valentin7537!',
    database:'games'
  });
  db.connect();

var app = http.createServer(function(request,response){
    var _url = request.url;
    var pathname =url.parse(_url,true).pathname;

    if(pathname === '/'){
        db.query(`SELECT * FROM card2`,function(error,topics){
            var template = `<!DOCTYPE html> 
            <html>
                <table>
                <tr>
                    <th>ID</th>
                    <th>SUIT</th>
                    <th>RANK</th>
                </tr>
                `;
            var i = 0;
            while(i<topics.length){
                template += `<tr>
                    <th>${topics[i].id}</th>
                    <th>${topics[i].suit}</th>
                    <th>${topics[i].rank}</th>
                </tr>`
                i++;
            }
            template += `</table>
                <a href= "/create">create</a>
                <a href="/delete">delete</a>
            </html>`;
            response.writeHead(200);
            response.end(template);
        });
    }else if(pathname === '/create'){
        var template = `<html><form action="/process_create" method="post">
            <p><input type="text" name="id" placeholder="id"></p>
            <p><input type="text" name="suit" placeholder="suit"></p>
            <p><input type="text" name="rank" placeholder="rank"></p>
            <p><input type="submit"><p>
            </form></html>
        `;
        response.writeHead(200);
        response.end(template);
    }else if(pathname === '/process_create'){
        var body = '';
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        db.query(`INSERT into card2 values(?,?,?)`,[post.id,post.suit,post.rank], function(error, result){
          if(error) { throw error; }
          response.writeHead(302, {Location: `/`});
          response.end();
        });
    });
    }
    else if(pathname == '/delete'){
        var template = `<html><form action="/process_delete" method="post">
        <p><input type="text" name="id" placeholder="id"></p>
        <p><input type="submit"><p>
        </form></html>
    `;
        response.writeHead(200);
        response.end(template);
    }
    else if(pathname ==='/process_delete'){
        var body = '';
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        db.query(`DELETE FROM card2 WHERE id=?`,[post.id], function(error){
          response.writeHead(302, {Location: `/`});
          response.end();
        });
    });
    }
});
app.listen(3000);