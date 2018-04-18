const path = require('path')
const config = require(path.join(__dirname, '../knexfile')).development
const knex = require('knex')(config)


function clickedCountry (countryCode) {
  return knex('countries')
  .where('country_code', countryCode)
  .select()
}



module.exports = clickedCountry
