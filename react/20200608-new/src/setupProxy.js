const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/builderinner/mobileui',
        createProxyMiddleware({
            target: 'http://10.146.173.15:8370',
            changeOrigin: true,
            onProxyRes(proxyRes, req, res) {
                /* res.send({
                    data: 1123
                }); */
            }
        })
    );
};
