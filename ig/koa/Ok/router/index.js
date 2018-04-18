const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

let home = new Router()
home.get('/', async (ctx) => { 
    let html = `<div>home</div>`

    ctx.body = html
})

let router = new Router()
router.use('/', home.routes(), home.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
})
