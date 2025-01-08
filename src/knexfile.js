
// change these to env variables
const config = {
    client: "pg",
    connection: {
        host: 'postgres_db',
        user: 'usr',
        password: 'hardPassword',
        database: 'db',
        port: 5432,
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations",
        loadExtensions: ['.js'],
        directory: './dist/db/migrations',
    },
    seeds: {
        directory: './dist/db/seeds'
    }

};

module.exports = {
    development: config,
    test: config,
    staging: config,
    production: config,
};


