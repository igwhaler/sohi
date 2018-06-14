const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const path = require('path')
const static = require('koa-static')
const router = require('./router')

/*
// 中间件的使用
const loggerSync = require('./middleware/loggerSync')
app.use(loggerSync()) */

/* const getRoute = require('./router/getRoute')
app.use(async (ctx) => {
  let {url} = ctx.request

  ctx.body = await getRoute(url)
}) */

// ctx.body解析中间件
app.use(bodyParser())

// static静态资源中间件
app.use(static(
  path.join(__dirname, './static')
))

// 路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(9000, () => {
  console.log('port: 9000')
})
