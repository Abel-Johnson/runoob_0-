var events = require('events');

//事件发布对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function() {
    console.log('连接成功');
    eventEmitter.emit('data_received');
}

//创建事件
eventEmitter.on('connect',connectHandler);
eventEmitter.on('data_received',function() {
    console.log('数据已收到');
})

//触发事件
eventEmitter.emit('connect');

console.log('程序执行完毕');