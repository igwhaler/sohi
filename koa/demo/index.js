
const Koa = require('koa');
const app = new Koa();
const runPhantom = require('./phantom');


/* app.use(async ctx => {
  ctx.body = 'Hello World';
}); */
app.use(runPhantom());

app.listen(8800);
