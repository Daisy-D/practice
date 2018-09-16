import index from './indexController'
const initController = {
  init(app, router) {
    app.use(router(function (_) {
      _.get('/index/index', index.index());
    }));
  }
}
export default initController