import { Client } from 'pg';



const client = new Client({
    user: 'usr',
    host: 'localhost',
    database: 'db',
    password: 'hardPassword',
    port: 5432,
});

export { client as DbClient };


