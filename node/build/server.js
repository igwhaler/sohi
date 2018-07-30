let http = require('http')
let url = require('url')

let start = (route, handle) => {
    let onRequest = (request, response) => {
        let postData = ''
        let pathname = url.parse(request.url).pathname

        request.setEncoding("utf8")
        request.addListener('data', function (postDataChunk) {
            postData += postDataChunk
        })
        request.addListener('end', function () {
            route(pathname, handle, response, postData)
        })
    }
    http.createServer(onRequest).listen(8080)

    console.log('server has started')
}

exports.start = start
