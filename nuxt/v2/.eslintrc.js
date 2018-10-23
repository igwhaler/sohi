module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // 'plugin:vue/recommended',
    // 'plugin:prettier/recommended'

    'plugin:vue/essential',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    // 'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eqeqeq': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'camelcase': 0,
    'space-before-function-paren': 0,
    'no-mixed-operators': 0
  }
}
