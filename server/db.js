const path = require('path')
const config = require(path.join(__dirname, '../knexfile')).development
const knex = require('knex')(config)


//
// function getMap {
//   return knex('WorldMap')
//   .select()
// }
//
