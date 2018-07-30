function log (ctx) {
  let {url} = ctx.request

  return url === '/' ? false : true
}

module.exports = function () {
  return async (ctx, next) => {
    let isUrl = log(ctx)

    if (!isUrl) {
      ctx.body = '根路径无内容'
    } else {
      next()
    }
  }
}
