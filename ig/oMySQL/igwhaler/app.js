var fs = require('fs');
var babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));
var babelRegister = require('babel-register');

babelRegister(babelConfig)

// 业务逻辑
require('./server/controller/blog.js');
