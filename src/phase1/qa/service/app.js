var express = require('express');
var app = express()
app.get('/test', function (req,res) {
  res.send({
    data: "helle wo"
  })
})
var server = app.listen(3000, function () {
  console.log("server start")
})
module.exports = app