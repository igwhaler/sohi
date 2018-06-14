const Router = require('koa-router')
const blog = new Router()

const { getArticleList } = require('../service/blog.js')
blog.get('/article/list', async (ctx) => {
  ctx.body = await getArticleList()
})

module.exports = blog