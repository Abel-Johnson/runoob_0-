var http = require('http');
var url = require('url');
var util = require('util');

var server =  http
    .createServer(function(request,response) {
        // console.log(request);
        response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});

        var params = url.parse(request.url,true).query;

        // response.write();
        response.end('网站名: '+params.name+'\n网址: '+params.url);
    })
    .listen(1234);  