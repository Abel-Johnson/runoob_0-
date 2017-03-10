process.on('exit',function(code) {
    setTimeout(function() {
        console.log('never execute');
        console.log('阿偶,打脸了');
    }, 0);
    console.log('进程结束了,退出码为: '+code);
})
console.log('程序执行完毕');


process.stdout.write('HELLO SHELL');
process.argv.forEach(function(value,index,arr) {
    console.log(index+': '+value);
});
console.log(process.execPath);//node执行程序的路径
console.log(process.platform);//运行平台
console.log('当前node的版本'+process.version);

console.log('当前进程的工作目录'+ process.cwd());
console.log(process.memoryUsage());//'内存使用情况'