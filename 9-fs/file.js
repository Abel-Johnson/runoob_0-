var fs = require('fs');

// fs.open('./test1.txt', 'r+', function(err,fd) {
//     err?console.error(err):console.log('文件打开成功');
// })

// fs.stat('./test1.txt', function(err,stats) {
//     if(err) {
//         console.error(err);
//     } else {
//         console.log(stats);

//         // stats是fs.Stats类的实例
//         /*
//         stats.isFile()	如果是文件返回 true，否则返回 false。
//         stats.isDirectory()	如果是目录返回 true，否则返回 false。
//         stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
//         stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
//         stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
//         stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
//         stats.isSocket()	如果是 Socket 返回 true，否则返回 false.
//         */
//     }
// });


// fs.writeFileSync('./test1.txt', '李白:  窗前明月光,疑是地上霜,举头望明月,低头思故乡', {'encoding':'utf8'},function(err) {
//     if (err) {
//         return console.log(err);
//     }
// })

// fs.readFile('./test1.txt',function(err,data) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data.toString('utf8'));
//     }
// })
var buf = new Buffer(1024);

// fs.open('./test1.txt', 'r+', function(err, fd) {
//     if(err) {
//         console.error(err);
//     } else {
        // fs.read(fd,buf,0,buf.length,0,function(err,bytesRead,buffer){
        //     if(err) {
        //         console.error(err);
        //     } else {
        //         // console.log(buffer.toString()+'\n');
        //         console.log(buffer.slice(0,bytesRead).toString());
                
        //         fs.close(fd,function(err){
        //             if(err) {
        //                 console.error(err);
        //             } else {
        //                 console.log('文件已关闭');
        //             }
        //         })
        //     }
        // })
        // fs.ftruncate(fd,10,function(err) {
        //     if(err) {
        //         console.error(err);
        //     } else {
        //         fs.read(fd,buf,0,buf.length,0,function(err,bytesRead,buffer) {
        //             if(err) {
        //                 console.error(err);
        //             } else {
        //                 if(bytesRead>0) {
        //                     console.log(buffer.slice(0,bytesRead).toString());
        //                 }
        //                 fs.close(fd,function(err) {
        //                     err&&console.error(err);
        //                 })

        //             }
        //         })
        //     }
        // })

        // fs.unlink('./test1.txt',function(err) {
        //     err&&console.error(err);
        // })

    // }

// })
        // fs.mkdir(__dirname+'/mkdir创建的文件夹',function(err) {
        //     err&&console.error(err);
        // })

        // fs.readdir('./',function(err,files) {
        //     if(err) {
        //         console.error(err);
        //     } else {
        //         console.log(files);
        //     }
        // })
        
        fs.rmdir('mkdir创建的文件夹',function(err) {
            err&&console.error(err);
        })

