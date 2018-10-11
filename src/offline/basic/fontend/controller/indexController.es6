import indexModel from '../models/indexModel.js'
const indexController = {
  index() {
    return async (ctx, next) => {
      ctx.body = await ctx.render('index.html', {
        title: '点赞'
      })
    }
  },
  update() {
    return async (ctx, next) => {
      const indexM = new indexModel();
      ctx.body = await indexM.updateNum();
    }
  }
}
export default indexController