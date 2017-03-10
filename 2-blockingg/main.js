var fs = require('fs');
//同步阻塞了
// var data = fs.readFileSync('./input.txt');
// console.log(data);
// console.log(data.toString());

//异步读取
fs.readFile('./input1.txt',function(err,data){
    if (err) {
        console.log('ERROR: '+err+'\n'+err.stack);
    } else {
        console.log('请求成功,文件内容为: ' + data.toString());
    }
});
console.log('over');