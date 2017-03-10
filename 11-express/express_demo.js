var express = require('express');
var app = express();

//处理get请求(路由)
app.get('/',function(req,res) {
    res.send('HELLO get主页');
});
app.post('/',function(req,res) {
    res.send('HELLO post主页')
});
app.get('/my*resume',function(req,res) {
    res.send('我的简历')
})
app.get('/my*works',function(req,res) {
    res.send('我的作品')
})


//搭建服务器
var server = app.listen(8081, function() {

    var host = server.address().address;
    var port = server.address().port;
    console.log(host,port);
    console.log('实例,访问地址为http://%s:%s',host,port);

})
