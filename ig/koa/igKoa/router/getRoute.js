const fs = require('fs')

function render (page) {
  return new Promise((resolve, reject) => {
    let viewUrl = `./view/${page}`

    fs.readFile(viewUrl, 'binary', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

async function route(url) {
  let view = '404.html'

  switch (url) {
    case '/':
      view = 'index.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    case '/404':
      view = '404.html'
      break
    default:
      break
  }

  return await render(view)
}

module.exports = route
