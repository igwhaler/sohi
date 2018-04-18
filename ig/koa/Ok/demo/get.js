const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  let {url, request} = ctx
  let {query, querystring} = request

  ctx.body = ctx
})

app.listen(3000, () => {})