var path = require('path');
module.exports = {
    dev: {
        outputPath: path.resolve(__dirname, '../dist'),
        outputPublicPath: '/',
        port: 80
    },
    prod: {
        outputPath: path.resolve(__dirname, '../dist'),
        outputPublicPath: '/'
    }
}