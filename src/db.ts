import knex from 'knex';
const knexfile = require('./knexfile.js')

const knexInstance = knex(knexfile.development)
export { knexInstance as dbKnexClient }


