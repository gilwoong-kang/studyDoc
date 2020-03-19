var http = require('http');
// var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var express = require('express');
var app = express();

var mysql = require('mysql');
var db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'coke9080!',
    database : 'games'
});
db.connect();



app.get('/', function(req, res) {
  db.query('SELECT * FROM card3', function (error, topics, fields) {
    if(error) {
        throw error;
    }
    var i =0;
    tag = '';
    while(i < topics.length) {
      var tag = tag +
      `<tr>
      <td>${topics[i].id}</td>
      <td>${topics[i].suit}</td>
      <td>${topics[i].rank}</td>
      </tr>
      `
      ;
      ++i;
    }
    var html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
      </head>
      <body>
      <table border="1">
          <th>${fields[0].name}</th>
          <th>${fields[1].name}</th>
          <th>${fields[2].name}</th>
          ${tag}
      </table>
      <a href="/create">create</a>
      <a href="/delete">delete</a>
      </body>
    </html>
    `
    // response.writeHead(200);
    // response.end(html);
    res.send(html);

  });
});
app.get('/create', function(req, res) {
  
  var html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
    INSERT
    <form action="/create_process" method="post">          
        <p><input type="text" name="id" placeholder="id"></p>
        <p><input type="text" name="suit" placeholder="suit"></p>
        <p><input type="text" name="rank" placeholder="rank"></p>
        <p>
        <input type="submit">
        </p>
    </form>          
    </body>
  </html>
  `;

  res.send(html);

});
app.post('/create_process', function(req, res) {
  var body = '';
  req.on('data', function(data){
      body = body + data;
  });
  req.on('end', function(){
      var card = qs.parse(body);
      var id = card.id;
      var suit = card.suit;
      var rank = card.rank;
      db.query(`INSERT into card3 values(?, ?, ? )`,[ parseInt(id), suit, rank], function(error, result){
        if(error) { throw error; }
        // res.writeHead(302, {Location: `/`});
        // res.end();
        res.redirect('/');
      });
  });
});
app.get('/delete', function(req, res) {
  var html = `
  <!DOCTYPE html>
          <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
            INSERT
            <form action="/delete_process" method="post">          
                <p><input type="text" name="id" placeholder="id"></p>
                <input type="submit">
                </p>
            </form>          
            </body>
          </html>
  `;
  res.send(html);
});
app.post('/delete_process', function(req, res) {
  var body = '';
  req.on('data', function(data){
      body = body + data;
  });
  req.on('end', function(){
      var post = qs.parse(body);
      db.query(`DELETE FROM card3 WHERE id=?`,[post.id], function(error){
        res.redirect('/');
      });
  });
});


app.listen(3000,function(){
  console.log("port 3000");
});