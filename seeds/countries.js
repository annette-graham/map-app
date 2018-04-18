
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {id: 1, name: 'New Zealand', language: 'English, Maori, NZ Sign Language', capital: 'Wellington', currency: 'NZD', population: '4.7 million'},
        {id: 2, name: 'Brazil', language: 'Portuguese', capital: 'Brasilia', currency: 'Brazilian Real', population: '207.7 million'},
        {id: 3, name: 'Finland', language: 'Finnish, Swedish', currency: 'Euro', population: '5.5 million'}
      ]);
    });
};
