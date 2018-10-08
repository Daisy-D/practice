(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./index.es6'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./index.es6'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.index);
    global.thumb = mod.exports;
  }
})(this, function (_index) {
  'use strict';

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  let f = new _index2.default(0, $('#thumb'));
  f.clickAction();
});
