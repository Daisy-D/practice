// // 堵塞代码
// var fs = require('fs');
// // 阻塞读取readFileSync，非堵塞读取readFile
// var data = fs.readFileSync('data.txt');
// console.log(data);//<Buffer e4 bb a3 e8 b5 9b e7 9c 9f e4 bb a3 e8 b5 9b>
// console.log(data.toString());//代赛真代赛


// 非堵塞代码
var fs = require('fs');
var data = fs.readFile('data.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});
console.log('程序执行完毕');

// 程序执行完毕
// 代赛真代赛