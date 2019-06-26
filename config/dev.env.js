'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://172.16.1.254:18191"'
  BASE_API: '"http://localhost:8000"'
 /* BASE_API: '"http://218.80.1.114:18191"'*/
})
