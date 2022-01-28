const knex = require('knex');
require('dotenv').config();
const db = knex({
  client: 'pg',
  connection:
  process.env.DATABASE_URL ||
  process.env.DB_URL_LOCAL,
  searchPath: 'public',
  migrations: {
    directory: '/db/migrations'
  },
  seeds: {
    directory: path.join(__dirname, '../db/seeds')
  }
});

module.exports = db;
