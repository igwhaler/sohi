const Koa = require('koa')
const convert = require('koa-convert')

const LoggerGenerator = require('../middleware/logger-generator.js')

const app = new Koa

/* app.use()
app.use(async (ctx) => {
  console.log(ctx)
  ctx.body = 'hello koa2'
}) */

app.use(convert(LoggerGenerator()))

app.use((ctx) => {
  ctx.body = 'hello world!'
})

app.listen(3000)
