var webpack = require("webpack");
var path = require('path');

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    ep1: './src/js/example/ep1.js',
    ep2: './src/js/example/ep2.js',
    arrEp: ['./src/js/example/ep1.js', './src/js/example/ep2.js'],
    vendor: ['./src/js/lib/jquery.min.js']
  },
  output: {
    path: __dirname + '/build/js/',
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
        {
            test: /\.(jsx|js)$/,
            loader: "babel-loader"
        },
        {
          test: /\.less$/,
          loader: "style-loader!css-loader!less-loader"
        }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js",
      miniChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: "./templates/tpl1.html",
      filename: "../../html/result_tpl1.html",
      //输出文件【注意：这里的根路径是module.exports.output.path】
      inject: "body",
      chunks: ["vendor", "ep1"]
    })
  ]
};

console.log(__dirname);