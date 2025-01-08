import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('rooms', table => {
        table.increments('id');
        table.string('room_number').notNullable();
        table.integer('room_type_id').unsigned().notNullable();
        table.foreign('room_type_id').references('id').inTable('room_types').onDelete('CASCADE');
        table.timestamps(true, true)
    })
};




export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('rooms');

}

