"use strict";

var _babelPolyfill = require("babel-polyfill");

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _babelRegister = require("babel-register");

var _babelRegister2 = _interopRequireDefault(_babelRegister);

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaSwig = require("koa-swig");

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require("co");

var _co2 = _interopRequireDefault(_co);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaStatic = require("koa-static");

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _config = require("./config/config.js");

var _config2 = _interopRequireDefault(_config);

var _initController = require("./controller/initController.js");

var _initController2 = _interopRequireDefault(_initController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// koa 2.x
var app = new _koa2.default();

_initController2.default.init(app, _koaSimpleRouter2.default);

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _config2.default.get('viewsDir'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html'
}));
app.use((0, _koaStatic2.default)(_config2.default.get('staticDir')));
app.listen(_config2.default.get('port'));
