const path = require('path')
const environment = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '../knexfile'))[environment]
const knex = require('knex')(config)

function clickedCountry (countryCode) {
  return knex('countries')
  .where('country_code', countryCode)
  .select()
  .first()
}

function editNotes(notes, countryCode) {
  return knex('countries')
  .where('country_code', countryCode)
  .update({notes: notes})
  .then(() => {
    return knex('countries')
    .where('country_code', countryCode)
    .first()
  })
}

module.exports = {
  clickedCountry,
  editNotes
}
