// // supervisor自动刷新；supervisor app.js启动（之前是node app.js启动）
// var express = require('express');
// var app = express();

// app.get('/hello/:id', function (req, res) {
//   // res.send('Hello World query!!!' + req.query.name + req.query.age + 'Hello World params!!!' + req.params.id);
//   res.json({
//     'id': req.params.id
//   })
// })

// var server = app.listen(8012, function () {
//   console.log("接口启动")
// })

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})
app.use(express.static('public'));
app.get('/index', function (req, res) {
  res.sendFile(__dirname + "/views/" + 'index.html');
})
app.post('/index', urlencodedParser, function (req, res) {
  console.log(req.body.data);
  res.redirect("https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + req.body.data + "&oq=res&rsv_pq=99ee7e930003957a&rsv_t=50f2ZuOM7v7HvH%2B%2FyfYWWJc4uTaz2kEA%2B%2Fj%2Bn9fwQuptICzUXJD5ytr5wtM&rqlang=cn&rsv_enter=1&rsv_sug3=4&rsv_sug1=4&rsv_sug7=100&rsv_sug2=1&prefixsug=res&rsp=1&rsv_sug4=1141")
})

var server = app.listen(8012, function () {
  console.log("接口启动")
})