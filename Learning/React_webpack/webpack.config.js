var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/js/1.js'),
  output: {
    path: path.resolve(__dirname, './build/js/'),
    filename: "bundle1.js"
  },
  module: {
    loaders: [
        {
            test: /\.(jsx|js)$/,
            loader: "babel"
        }
    ]
  }
};