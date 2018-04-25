const path = require('path')
const config = require(path.join(__dirname, '../knexfile')).development
const knex = require('knex')(config)


function clickedCountry (countryCode) {
  return knex('countries')
  .where('country_code', countryCode)
  .select()
  .first()
}

function editNotes(countries, notes) {
  return knex('countries')
  .where('notes', notes)
  .update({notes: countries.notes})
}

module.exports = {
  clickedCountry,
  editNotes
}
