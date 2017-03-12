var express = require('express');
var bodyParser = require('body-parser');
//创建application/x-www-form-urlencoded编码解析,设置给请求头
var urlencodeParser = bodyParser.urlencoded({extended:false});

var multer = require('multer');
var multerHandle = multer({dest: '/tmp/'}).array('img');

var fs = require('fs');




var app = express();
app.use(multerHandle);
app.use(urlencodeParser);
app.use(express.static('../public'));

app.get('/',function(req,res) {
    res.sendFile(__dirname+'/index.html');
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

app.get('/process_get', function(req,res) {
    var response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.send(JSON.stringify(response));
});
app.post('/process_post', function(req,res) {
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    res.send(JSON.stringify(response));
});


app.post('/file_upload',function(req,res) {
    //文件信息: { fieldname: 'img',
        /*originalname: '76e4c5eab2478dbe27fe6a49074de4ab.jpg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        destination: '/tmp/',
        filename: '1b6c54a2dab44cbee03356e927b40337',
        path: '/tmp/1b6c54a2dab44cbee03356e927b40337',
        size: 86273 }*/
    console.log(req.files[0]);
    
    //目标位置文件路径
    var des_files = __dirname+'/'+req.files[0].originalname;

    //读取上传的文件
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile('../public/uploadPics/'+req.files[0].originalname,data,function(err) {
            if(err) {
                console.error(err);
            } else {
                var response = {
                    message: '上传成功',
                    filename: req.files[0].originalname
                }
            };
            res.send(JSON.stringify(response));
        });
    });
});




//搭建服务器
var server = app.listen(1234, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host,port);
    console.log('实例,访问地址为http://%s:%s',host,port);
})
