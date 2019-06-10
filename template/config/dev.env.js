'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const env = 'development';
module.exports = merge(prodEnv, {
  NODE_ENV: `"${env}"`,
  API_ENV: `"${env}"`
})
