// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // not require constant expressions in conditions
        'no-constant-condition': 0,
        // not require === and !===
        'eqeqeq': 0,
        // allow multiline strings
        'no-multi-str': 0,
        // enforce 4 space indent
        'indent': ["error", 2],
        // allow variable decalared separately in functions
        'one-var': 0,
        // allow either backticks, double or single quotes
        'quotes': 0,
        // enforce no sapce before function parent
        'space-before-function-paren': ['error', 'never'],
        // not require camlecase
        'camelcase': 0,
        // not require newline at the end of files
        'eol-last': 0,
        // disallow semi in line end
        'semi': ["error", "always"],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
