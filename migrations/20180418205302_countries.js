
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('countries', function (table) {
    table.increments().primary()
    table.string('name')
    table.string('language')
    table.string('capital')
    table.string('currency')
    table.string('population')
    table.string('country_code')
    table.string('notes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('countries')
};
