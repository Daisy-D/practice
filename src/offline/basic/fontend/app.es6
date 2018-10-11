import babel_po from "babel-polyfill";
import babel_co from "babel-register";
import Koa from 'koa'; // koa 2.x
import render from 'koa-swig';
import co from 'co';
import router from 'koa-simple-router';
import server from 'koa-static';
import CONFIG from './config/config.js';
import initController from './controller/initController.js';
const app = new Koa();

initController.init(app, router);

app.context.render = co.wrap(render({
  root: CONFIG.get('viewsDir'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html'
}));
app.use(server(CONFIG.get('staticDir')));
app.listen(CONFIG.get('port'));