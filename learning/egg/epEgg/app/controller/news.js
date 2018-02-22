const {Controller} = require('egg')

class NewsController extends Controller {
  async list  () {
    const datalist = {
      list: [
        {
          id: 1,
          title: 'this is new 1',
          url: '/news/1'
        },
        {
          id: 2,
          title: 'news2',
          url: '/news/2'
        }
      ]
    }

    await this.ctx.render('/news/list.tpl', datalist)

    /*const ctx = this.ctx
    const page = ctx.query.page || 1
    const newsList = await ctx.service.news.list(page)

    await ctx.render('news/list.tpl', {list: newsList})*/
  }
}

module.exports = NewsController