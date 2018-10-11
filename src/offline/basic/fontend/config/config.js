'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONFIG = new Map(); // 创建Map键值对
/*
* 配置文件，配置端口号，文件名
*/
var a = _path2.default.join(__dirname, '..', 'public');
console.log(11, a);
CONFIG.set('port', 8877);
CONFIG.set('staticDir', _path2.default.join(__dirname, '..', 'public'));
CONFIG.set('viewsDir', _path2.default.join(__dirname, '..', 'views'));

exports.default = CONFIG;
