const fs = require('fs');

fs.readFile('./readme.txt','utf8',(err,data) => {
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});