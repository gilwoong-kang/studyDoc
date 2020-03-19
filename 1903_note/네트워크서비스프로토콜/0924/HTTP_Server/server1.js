const http = require('http');

http.createServer((req,res) => {
    var templelate = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Node.js 웹서버</title>
        </head>
        <body>
            <h1>Node.js웹 서버</h1>
            <p>만들 준비 되셨나요?</p>
        </body>
    </html>`;
    res.end(templelate);
}).listen(8080,() => {
    console.log('8080번 포트에서 서버 대기 중입니다!.');
})

// res메소드로 응답을 보낸다.
// write로 응답 내용을 적고
// end로 마무리 한다.