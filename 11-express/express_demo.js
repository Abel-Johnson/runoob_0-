var express = require('express');

var app = express();

//处理get请求
app.get('/',function(req,res) {
    res.send('HELLO WORLD');
})

//搭建服务器
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host,port);
    console.log('实例,访问地址为http://%s:%s',host,port);
})
