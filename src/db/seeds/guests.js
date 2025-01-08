/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // fix id autoincrement issue
  await knex('guests').del()

  await knex('guests').insert([
    { id: 1, first_name: 'peach_F', last_name: 'peach_L', email: "peach@foobar.com" },
    { id: 2, first_name: 'bowser_F', last_name: 'bowser_L', email: "bowser@foobar.com" },
    { id: 3, first_name: 'mario_F', last_name: 'mario_L', email: "mario@foobar.com" },
  ]);
};
