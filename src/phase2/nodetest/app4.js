var express = require('express');
var app = express();

app.get('*', function (req, res, next) {
  console.log("必经路由")
  next();
});
app.get('/index/test', function (req, res, next) {
  res.json({data:'111'})
  console.log("/index/test")
});

app.listen(8012, function () {
  console.log("接口启动")
})
