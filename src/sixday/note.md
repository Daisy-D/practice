## 一、new运算符
### new 运算符是用来实例化一个类
### new运算符三步走：
1. 创建一个类的实例：创建一个空对象obj，然后把这个空对象的__proto__设置为Person.prototype(即构造函数的prototype)；
2. 初始化实例：构造函数Person被传入参数并调用，关键字this被设定指向该实例obj；
3. 返回实例obj。
```javascript
function New(F){
    var obj = {'__proto__': F.prototype};  /*第一步*/
    return function() {
        F.apply(obj, arguments);           /*第二步*/
        return obj;                        /*第三步*/
    }
}
```
## 二、jQuery最开始的一段代码
```javascript
(function(window,undefined){
  var jQuery = function (selector,context){
    return new jQuery.fn.init(selector,context)
  }
  jQuery.fn = jQuery.prototype = {
    init:function(selector,context){}
  }
  jQuery.fn.init.prototype = jQuery.fn
})(window);
```