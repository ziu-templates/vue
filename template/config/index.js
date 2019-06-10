'use strict'
// Template version: {{ template_version }}

const path = require('path')
const merge = require('webpack-merge');

/**
 * 开发环境域名配置
 * 根据需要手动修改
 */
let devDomain = 'localhost'; // 例如 xxx.xxx.com

/**
 * [获取路径配置]
 * 根据需要手动修改 - assetsPublicPath
 */

function getPath (env = 'prod') {
    /**
     * [非生产环境静态资源路径]
     * 手动修改 - assetsPublicPath
     */
    let alphaPath = {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/', // 以斜杠开始并以斜杠结束，例如/xxx/xxx/
    };
    const pathes = {
        dev: alphaPath,
        test: alphaPath,
        stag: alphaPath,
        /**
         * [生产环境静态资源路径]
         * 手动修改 - assetsPublicPath
         */
        prod: {
            // Paths
            assetsSubDirectory: 'static',
            assetsPublicPath: '/', // 以斜杠开始并以斜杠结束，例如/xxx/xxx/
        }
    };

    return pathes[env] || pathes.prod;
}

/**
 * [获取静态文件打包存放路径配置]
 */

function getAssetsRoots (env = 'prod') {
    let alphaPath = path.resolve(__dirname, '../dist/alpha/');
    const assetsRoots = {
        dev: alphaPath,
        test: alphaPath,
        stag: alphaPath,
        prod: path.resolve(__dirname, '../dist/release/')
    };

    return assetsRoots[env] || assetsRoots.prod;
}

const htmlWebpackPluginConfig = {
    filename: 'main.html',
    template: 'index.ejs'
};

/**
 * [编译环境通用配置]
 * npm run build / npm run test
 */
const buildCommon = {

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
};

/**
 * 开发环境
 */
const devConfig = merge({
    // Paths
    assetsRoot: getAssetsRoots('dev'),
    proxyTable: {},

    // Various Dev Server settings
    host: devDomain || 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    {{#lint}}// Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
    {{/lint}}

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
}, getPath('dev'), htmlWebpackPluginConfig);

/**
 * 测试环境
 */
const testConfig = merge({
    // Paths
    assetsRoot: getAssetsRoots('test'),
    // Template for index.html
    index: path.resolve(__dirname, '../dist/alpha/main.html'),
}, getPath('test'), htmlWebpackPluginConfig, buildCommon);

/**
 * 正式环境
 */
const prodConfig = merge({
    // Template for index.html
    index: path.resolve(__dirname, '../dist/release/main.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist/release/')
}, getPath('prod'), htmlWebpackPluginConfig, buildCommon);

module.exports = {
    apiEnv: {
        development: 'dev',
        production: 'build',
        test: 'test',
        staging: 'staging'
    },
    dev: devConfig,

    build: prodConfig,

    test: testConfig,

    staging: testConfig
}
