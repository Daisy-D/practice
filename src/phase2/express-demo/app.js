var express = require('express');
var app = express();
var swig = require('swig');
var mysql = require('mysql');

// swig
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
// mysql
var connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'db_userinfo'
});
connection.connect();

app.use(express.static('public'));
app.get('/', function (req, res, next) {
  res.render('index', {
    title: '测试首页',
    data: 'hello a'
  })
});

app.get('/receive', function (req, res, next) {
  var post = {
    username: req.query.username
  };
  var query = connection.query('INSERT INTO t_username SET ?', post, function (error, results, fields) {
    if (error) {
      res.json({
        success: 'no',
        msg: error
      })
      // if(error.code == "PROTOCOL_CONNECTION_LOST"){
      //   console.log('连接超时')
      // }
    } else {
      res.json({
        success: 'ok',
        msg: '成功'
      })
    }
  });
});

app.get('*', function (req, res, next) {
  res.status('404 ');
  res.end('404');
});
app.use(function (err, req, res, next) {
  res.status('500');
  res.end('500');
});
app.listen(8015, function () {
  console.log('server port 8015 ')
});