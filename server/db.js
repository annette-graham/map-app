let environment = process.env.NODE_ENV || 'development'
let config = require('../knexfile')[environment]
let db = require('knex')(config)
