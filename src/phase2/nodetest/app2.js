// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// // 创建 application/x-www-form-urlencoded 编码解析
// var urlencodedParser = bodyParser.urlencoded({
//   extended: false
// })
// app.use(express.static('public'));
// app.get('/index', function (req, res,next) {
//   res.data=123;
//   next();
// },function(req, res,next){
//   console.log("通过中间件取到的值",res.data)
//   res.send("end");
// })
//  app.listen(8012, function () {
//   console.log("接口启动")
// })

// var express = require('express');
// var app = express();
// app.get('/index', function (req, res, next) {
//   consollle.log(111);
// });
// app.use(function(err,req, res, next){
//   console.error(err.stack);
//   res.status(500).send('Something broke!!');
// });
//  app.listen(8012, function () {
//   console.log("接口启动")
// })

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/index', function (req, res) {
  console.log(req.cookies);
  /*
  { _ga: 'GA1.1.1995884139.1535079349',
  'advanced-frontend': 'a241cfef5a979cfde1e724dd5c002a1d',
  '_csrf-frontend': '5a836e89936cd090cefd38c64768615b8d42b88abecd977dc46e0a99cfa250f3a:2:{i:0;s:14:"_csrf-frontend";i:1;s:32:"uLtzheUKYqaYttC9nLj4jITy5ThL3X3Y";}' }
  */
  res.send(req.cookies["advanced-frontend"]);//a241cfef5a979cfde1e724dd5c002a1d 
});

 app.listen(8012, function () {
  console.log("接口启动")
})