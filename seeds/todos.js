
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, text: 'heyyy'},
        {id: 2, text: 'testing'},
        {id: 3, text: 'seeeddds'}
      ]);
    });
};
