var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());
app.get('/', function(req,res) {
    res.sendFile(__dirname+'/index.html');
    console.log('cookies: ',req.cookies);
})

app.listen(1234);