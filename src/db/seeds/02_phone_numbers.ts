import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('phone_numbers').del()

    await knex('phone_numbers').insert([
        { id: 1, user_id: 2, phone_number: "1234" },
        { id: 2, user_id: 1, phone_number: "5678" },
        { id: 3, user_id: 2, phone_number: "1111" }
    ]);
};
