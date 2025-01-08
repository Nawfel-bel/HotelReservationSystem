/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('reserved_rooms', table => {
        table.increments('id');
        table.integer('room_id').unsigned().notNullable();
        table.foreign('room_id').references('id').inTable('rooms').onDelete('CASCADE');
     
        table.integer('reservation_id').unsigned().notNullable();
        table.foreign('reservation_id').references('id').inTable('reservations').onDelete('CASCADE');
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('reserved_rooms');

};
