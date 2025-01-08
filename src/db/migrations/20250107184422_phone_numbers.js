/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('phone_numbers', function (table) {
        table.increments('id').primary();
        table.string('phone_number').notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('guests').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('phone_numbers');

};
