function log(ctx) {
  console.log(ctx.method, ctx.header.host + ctx.url, 123)
}

module.exports = function () {
  return function * (next) {
    log(this)

    if (next) {
      yield next
    }
  }
}