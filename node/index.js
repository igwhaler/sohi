let server = require('./build/server')
let {route} = require('./build/router')
let {start, upload} = require('./build/requestHandlers')

let handle = {
    '/': start,
    '/start': start,
    '/upload': upload
}

server.start(route, handle)