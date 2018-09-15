'use strict';

require('babel-polyfill');

var Koa = require('koa'); // koa 2.x
var router = require('koa-simple-router');

var app = new Koa();

app.use(router(function (_) {
  _.get('/index', function (ctx, next) {
    ctx.body = 'hello';
  });
}));
app.listen(8010);
