// var koa = require("koa");
// var app = new koa();
// app.keys = ['im a newer secret', 'i like turtle'];
// app.use(function * () {
//   this.body = {
//     name: 'aaa'
//   };
//   this.cookies.set('name', 'tobi', {
//     signed: true
//   });
// })
// app.listen(8013);

var koa = require("koa");
var app = new koa();
app.keys = ['im a newer secret', 'i like turtle'];
app.use(function* () {
  this.throw(404,'404');//会阻断下面的进程
  this.body = {
    name: 'aaa'
  };
  this.cookies.set('name', 'daisy', {
    signed: true
  });
  console.log(this.url);
  console.log(this.query);
  console.log(this.cookies.get('name'));
})
app.listen(8013);