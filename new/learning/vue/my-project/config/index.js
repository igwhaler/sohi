//vue的wenpack文档: http://vuejs-templates.github.io/webpack
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    //是否生成 js sourcemaps
    productionSourceMap: false,
    //gzip压缩
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    //分析 Webpack 生成的包体组成并且以可视化的方式反馈给开发者
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 80,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    //是否生成 css sourcemaps
    cssSourceMap: false
  }
}
