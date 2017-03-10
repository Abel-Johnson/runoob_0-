var http = require('http');
var querystring = require('querystring');
// var util = require('util');

var postHTML = `
    <html>
        <head>
            <meta charset='utf-8'>
            <title></title>
        </head>
        <body>
            <form method='post'>
                用户名: <input name='username' placeholder='请输入用户名'>
                密  码: <input type='password' name='password' placeholder='请输入密码'>
                <input type="submit" value="提交">
            </form>
        </body>
    </html>
`

http.createServer(function(req,res) {
    var post = '';
    req.on('data',function(chunk) {
        post+=chunk;
    });

    req.on('end',function() {
        post = querystring.parse(post);
        // res.end(util.inspect(post));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(post.username&&post.password) {
            res.write('用户名: '+post.username+'\n'+'密码: '+post.password);
        } else {
            res.write(postHTML);
        }
        res.end();
    })
}).listen(1234);