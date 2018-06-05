const Router = require('koa-router')

let home = new Router()
home.get('/', async (ctx) => {
  ctx.body = 'index'
})

let page = new Router()
page.get('/404', async (ctx) => {
  ctx.body = '404'
}).get('/todo', async (ctx) => {
  ctx.body = 'todo'
}).get('/ctx', async (ctx) => {
  ctx.body = ctx
})

let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

module.exports = router
