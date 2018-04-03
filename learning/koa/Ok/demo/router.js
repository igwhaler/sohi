const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

function render (page) {

  return new Promise((resolve, reject) => {
    let viewUrl = `./view/${page}`

    fs.readFile(viewUrl, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

async function getRoute (url) {
  let routers = [
    {
      path: '/',
      view: 'index.html'
    },
    {
      path: '/a',
      view: 'a.html'
    },
    {
      path: '404',
      view: '404.html'
    }
  ]

  let _matchView = routers.filter(item => {
    return item.path === url
  })

  let _view = _matchView[0] && _matchView[0]['view'] || '404.html'

  let html = await render(_view)

  return html
}


app.use(async (ctx) => {
  let url = ctx.request.url

  console.log(url)

  let res = await getRoute(url)

  ctx.body = res
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})
