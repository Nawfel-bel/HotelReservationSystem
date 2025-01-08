import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('reservations', table => {
        table.increments('id');
        table.date('start_date').notNullable();
        table.date('end_date').notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('guests').onDelete('CASCADE');
        table.timestamps(true, true)
    })
};



export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('reservations');

}

