const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello Wolrd!'
})

app.listen(4000)