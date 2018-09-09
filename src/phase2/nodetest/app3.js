// var express = require('express');
// var app = express();

// app.get('/index/test', function (req, res, next) {
//   console.log("sent by next")
//   next();
// }, function (req, res, next) {
//   res.send('hello express!'); //send了，下面就不能执行res的方法了
//   next();
// }, function (req, res, next) {
//   console.log('我是结尾'); //这是node方法，没事
//   // res.json({data:'我是结尾'});//send了，下面就不能执行res的方法了
// });

// app.listen(8012, function () {
//   console.log("接口启动")
// })
  
// ↑↑↑↑↑等同于↓↓↓↓↓↓
var express = require('express');
var app = express();

var cb0 = function (req, res, next) {
  console.log("sent by next")
  next();
};
var cb1 = function (req, res, next) {
  res.send('hello express a!'); //send了，下面就不能执行res的方法了
  next();
}
var cb2 = function (req, res, next) {
  console.log('我是结尾'); //这是node方法，没事
  // res.json({data:'我是结尾'});//send了，下面就不能执行res的方法了
}

app.get('/index/test', cb0, cb1, cb2);

app.listen(8012, function () {
  console.log("接口启动")
})