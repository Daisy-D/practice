var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.en('hello world');
});
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something blew up!' });
  } else {
    next(err);
  }
}
function errorHandler(err, req, res, next) {
  res.status(500);
  // res.end(err.stack);
  res.end("错错错啦"+'\n'+res.statusCode);
}
app.listen(8012, function () {
  console.log("接口启动")
})