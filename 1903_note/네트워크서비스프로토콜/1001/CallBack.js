function findUserAndCallBack(id,callback) {
    const user = {
        id : id,
        name : "User" +id,
        email : id+"@test.com"
    };
    callback(user);
}

findUserAndCallBack(1,function(user) {
    console.log("user :",user)    ;
});