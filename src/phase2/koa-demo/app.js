// const koa = require('koa');
// const app = new koa();

// app.use(function *(){
//   this.body = 'Hello World Koa';
// })

// app.listen(8017)


const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  console.log(1)
  await next();
  console.log(2)
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(3)
  await next();
  console.log(4)
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
  console.log(5)
  ctx.body = 'Hello World';
});

app.listen(8017);

/*
1
3
5
4
2
GET / - 3ms
1
3
5
4
2
GET /favicon.ico - 1ms

*/