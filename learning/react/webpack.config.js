var webpack = require("webpack");
var path = require('path');

var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    ep1: './src/js/example/ep1.js',
    ep2: './src/js/example/ep2.js',
    vendor: ["jquery", "react", "react-dom"]
  },
  output: {
    path: __dirname + '/build/',
    filename: "js/[name].bundle.js"
  },

  module: {
    rules: [
        {
            test: /\.(jsx|js)$/,
            use: "babel-loader"
        },
        {
          test: /\.less$/,
          //use: ["style-loader", "css-loader", "less-loader"]
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "less-loader"]
          })
        }
    ]
  },

  plugins: [
    //压缩js
    new webpack.optimize.UglifyJsPlugin(),

    //提取公共js
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "js/vendor.js",
      //输出文件【注意：这里的根路径是module.exports.output.path】
      miniChunks: Infinity
    }),

    //分离css
    new ExtractTextPlugin({
      filename: "css/[name].css",
      //输出文件【注意：这里的根路径是module.exports.output.path】
      disable: false,
      allChunks: true
    }),

    //生成模板
    new HtmlWebpackPlugin({
      template: "./pages/ep1.html",
      filename: "html/ep1.html",
      //输出文件【注意：这里的根路径是module.exports.output.path】
      inject: "body",
      chunks: ["vendor", "ep1"]
    }),
    new HtmlWebpackPlugin({
      template: "./pages/ep2.html",
      filename: "html/ep2.html",
      //输出文件【注意：这里的根路径是module.exports.output.path】
      inject: "body",
      chunks: ["vendor", "ep2"]
    })
  ],

  resolve: {
    extensions: [" ", ".js", "jsx", ".ces6", ".css", ".less", "png", "jpg", "jpeg"],
    alias: {
      "jquery": path.join(__dirname, "node_modules/jquery/dist/jquery.min.js"),
      "react": path.join(__dirname, "node_modules/react/dist/react.min.js"),
      "react-dom": path.join(__dirname, "node_modules/react-dom/dist/react-dom.min.js")
    }
  }
};