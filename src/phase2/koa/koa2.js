var koa = require("koa");
var app = new koa();
app.keys = ['im a newer secret', 'i like turtle'];
app.use(function* () {
  var controller = this.request.path
  if(controller == '/test'){
    this.body = {
      test: '是test'
    }
  }else{
    this.body = {
      test: '不是test'
    }
  }
  console.log(controller);
})
app.listen(8013);