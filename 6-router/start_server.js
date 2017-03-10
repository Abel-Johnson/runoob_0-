var http = require('http');
var url = require('url');


function start(router) {
    console.log('执行start');
    function onRequest(request,response) {
        console.log('创建服务器的回调');
        var pathname = url.parse(request.url).pathname;
        console.log('Request for '+pathname+ '收到了');

        // router(pathname);

        response.writeHead(200,{'content-type':'text/plain'});
        response.write(router(pathname));
        response.end('HHHHello WWWWorld');
    }

    http.createServer(onRequest).listen(8888);
    console.log('服务器搭建成功');
}
// start();
module.exports = start;