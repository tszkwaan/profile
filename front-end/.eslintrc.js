module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
        '@vue/prettier'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'never',
                'normal': 'always',
                'component': 'always'
            },
            'svg': 'always',
            'math': 'always'
        }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
