const Koa = require('koa') // koa 2.x
const app = new Koa()
const router = require('koa-simple-router')
const convert = require('koa-convert')
const path = require('path')
const server = require('koa-static')
const render = require('koa-swig')
const co = require('co')

app.context.render = co.wrap(render({
  root: path.join(__dirname, './views'),
  autoescape: true,
  cache: 'memory',
  ext: 'html',
  writeBody: false
}))
app.use(router(_ => {
  _.get('/', (ctx, next) => {
    ctx.body = 'hello koa2'
  })
  _.get('/index', async (ctx, next) => {
    ctx.body = await ctx.render('index.html');
  })
}))
app.use(convert(server(path.join(__dirname, './public'))))
app.listen(8017, () => {
  console.log('服务开启啦')
})