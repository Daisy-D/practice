//模块的主要逻辑
function Hello(){
  var name;
  this.setName = function(argNmae){
    name = argNmae
  };
  this.sayHello = function(){
    console.log('Hello '+name);
  }
}
// 把模块暴露出去
module.exports = Hello;