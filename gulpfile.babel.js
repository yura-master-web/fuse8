/* eslint no-underscore-dangle: ["error", { "allow": ["_initPaths"] }] */
require('dotenv').config()
process.env.NODE_PATH = __dirname + '/front'
require('module').Module._initPaths()
require('require-dir')('tasks', {recurse: true})
