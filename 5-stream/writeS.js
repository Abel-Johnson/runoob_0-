var fs = require('fs');
var writerStream = fs.createWriteStream('input.txt');
writerStream.write('我想写点东西xxxxxxx','utf-8');
writerStream.end();

writerStream.on('error', function(err) {
    console.log(err.stack);
});
writerStream.on('finish', function() {
    console.log('写入完成');
});

console.log('OVER');