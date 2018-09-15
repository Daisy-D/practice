import "babel-polyfill";
import Koa from 'koa'; // koa 2.x
import router from 'koa-simple-router';

let app = new Koa()

app.use(router(_ => {
  _.get('/index', (ctx, next) => {
    ctx.body = 'hello'
  })
}));
app.listen(8010);