var express = require('express');
var app = express();
var swig = require('swig');

app.set('view engine', 'html');
app.engine('html', swig.renderFile);


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index2', {
    title: '测试首页',
    data: 'hello a'
  })
});
app.listen(8012, function () {
  console.log("接口启动")
})