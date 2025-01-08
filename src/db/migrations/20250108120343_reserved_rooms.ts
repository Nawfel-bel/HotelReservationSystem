import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('reserved_rooms', table => {
        table.increments('id');
        table.integer('room_id').unsigned().notNullable();
        table.foreign('room_id').references('id').inTable('rooms').onDelete('CASCADE');

        table.integer('reservation_id').unsigned().notNullable();
        table.foreign('reservation_id').references('id').inTable('reservations').onDelete('CASCADE');
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('reserved_rooms');

}

