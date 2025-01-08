/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('rooms', table => {
        table.increments('id');
        table.string('room_number').notNullable();
        table.integer('room_type_id').unsigned().notNullable();
        table.foreign('room_type_id').references('id').inTable('room_types').onDelete('CASCADE');
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('rooms');

};
