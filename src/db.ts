import knex from 'knex';
const knexfile = require('./knexfile.js')

const knexInstance = knex(knexfile.development)
knexInstance.migrate.latest().then(function () {
    // return knexInstance.seed.run()
})
export { knexInstance as dbKnexClient }


