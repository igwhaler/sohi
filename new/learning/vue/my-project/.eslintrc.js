// http://eslint.cn/docs/user-guide/configuring

module.exports = {
  //当前文件所在目录为根目录
  root: true,
  //指定解析器
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // 代码书写格式： https://github.com/feross/standard/blob/master/docs/RULES-zhcn.md
  //extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  // 定制检查
  'rules': {
    // 箭头函数参数是否必须带括号
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
