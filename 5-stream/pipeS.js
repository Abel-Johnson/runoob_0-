var fs = require('fs');

var readerStream = fs.createReadStream('./input.txt');
var writerStream = fs.createWriteStream('./input_target.txt');

readerStream.pipe(writerStream);