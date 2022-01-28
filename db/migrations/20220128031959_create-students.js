exports.up = function(knex) {
  return knex.schema.createTable('students', (table => {
    table.increments('id');
    table.string('first_name').notNullable();
    table.string('last_name');
  }))
};

exports.down = function(knex) {
  return knex.schema.dropTable('students');
};
