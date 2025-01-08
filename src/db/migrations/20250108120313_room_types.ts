import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('room_types', table => {
        table.increments('id');
        table.string('type').notNullable();
        table.float('price').unsigned().notNullable();
        table.timestamps(true, true)
    })
};




export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('room_types');

}

