const Koa = require('koa')
const app = new Koa()

/* const loggerSync = require('./middleware/loggerSync')
app.use(loggerSync()) */

const getRoute = require('./router/getRoute')

app.use(async (ctx) => {
  let {url} = ctx.request

  ctx.body = await getRoute(url)
})

app.listen(9000, () => {
  console.log('port: 9000')
})
