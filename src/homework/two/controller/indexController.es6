const indexController = {
  index(){
    return async(ctx,next)=>{
      ctx.body= await ctx.render('index.html',{
        title:'点赞'
      })
    }
  }
}
export default indexController