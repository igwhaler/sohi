const Router = require('koa-router')

let home = new Router()
home.get('/', async (ctx) => {
  ctx.body = 'index'
})

let page = new Router()
page.get('/404', async (ctx) => {

  ctx.body = '404'
})
.get('/todo', async (ctx) => {

  ctx.body = `
    <form method="POST" action="/page/ctx">
      <p>userName</p>
      <input name="userName" /><br/>
      <p>nickName</p>
      <input name="nickName" /><br/>
      <p>email</p>
      <input name="email" /><br/>
      <button type="submit">submit</button>
    </form>
  `
})
.get('/ctx', async (ctx) => {
  ctx.cookies.set('cid', 'hello world', {
    domain: '127.0.0.1',
    path: '/',
    maxAge: 10 * 60 * 100,
    expires: new Date('2019-02-15'),
    httpOnly: false,
    overwrite: false
  })

  ctx.body = ctx
}).post('/ctx', async (ctx) => {

  ctx.body = ctx.request.body
})


let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

module.exports = router
