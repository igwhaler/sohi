module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': ['error', 'always'],
        'no-extra-semi': 'error',
        'semi-style': ['error', 'last'],
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'space-before-function-paren': ['error', 'never']
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
