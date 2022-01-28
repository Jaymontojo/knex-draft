exports.seed = function(knex) {
  return knex('students').del()
    .then(function () {
      return knex('students').insert([
        {first_name: 'George', last_name: 'Washington'},
        {first_name: 'George', last_name: 'Harrison'},
        {first_name: 'George', last_name: 'Lucas'}
      ]);
    });
};
