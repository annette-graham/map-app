const path = require('path')
const config = require(path.join(__dirname, '../knexfile')).development
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
    return knex('countries').where('country_code', countryCode)
  })
}

module.exports = {
  clickedCountry,
  editNotes
}
