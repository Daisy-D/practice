// 引入Event模块，并创建eventsEmitter对象
var events =require('events');
var eventEmitter = new events.EventEmitter();
// 绑定事件处理函数
var connctHander = function connected(){
  console.log('connected被调用');  
};
eventEmitter.on('connection',connctHander);//完成事件绑定
// 触发事件
eventEmitter.emit('connection');
console.log('程序执行完毕');