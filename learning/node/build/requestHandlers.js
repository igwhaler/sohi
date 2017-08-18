let querystring = require('querystring')

function start (response, postData) {
    console.log(`Request handler 'upload' was called.`)

    let body =  '<html>'+
                '<head>'+
                '<meta http-equiv="Content-Type" content="text/html; '+
                'charset=UTF-8" />'+
                '</head>'+
                '<body>'+
                '<form action="/upload" method="post">'+
                '<textarea name="text" rows="5" cols="60"></textarea>'+
                '<input type="submit" value="Submit text" />'+
                '</form>'+
                '</body>'+
                '</html>';
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    response.write(body)
    response.end()
}

function upload (response, postData) {
    setTimeout(function () {
        console.log(`Request handler "start" was called.`)
    }, 5000)
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write(querystring.parse(postData).text)
    response.end()
}

module.exports = {
    start,
    upload
}
