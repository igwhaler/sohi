var path = require('path');

module.exports = {
  entry: {
    bundle_ep1: './src/js/example/ep1.js',
    bundle_ep2: './src/js/example/ep2.js'
  },
  output: {
    path: './build/js/example/',
    filename: "[name].js"
  },
  module: {
    loaders: [
        {
            test: /\.(jsx|js)$/,
            loader: "babel-loader"
        }
    ]
  }
};