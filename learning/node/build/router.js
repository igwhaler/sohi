function route(pathname, hanle, response, data) {
    if (typeof hanle[pathname] === 'function'){
        result = hanle[pathname](response, data)
    } else {
        result = '404'
    }
    
}

module.exports = {
    route
}