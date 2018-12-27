module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    'eqeqeq': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'camelcase': 0,
    'space-before-function-paren': 0,
    'no-mixed-operators': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
