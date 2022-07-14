const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/builder',
        createProxyMiddleware({
            target: 'https://baijiahao.baidu.com/',
            changeOrigin: true,
        })
    );

    app.use(
        '/pcui',
        createProxyMiddleware({
            target: 'https://baijiahao.baidu.com/',
            changeOrigin: true,
        })
    );
};
