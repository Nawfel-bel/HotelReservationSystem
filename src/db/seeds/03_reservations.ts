import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("reservations").del();

    await knex("reservations").insert([
        {
            id: 1,
            start_date: '2025-01-01',
            end_date: '2025-01-07',
            user_id: 1,
        },
        {
            id: 2,
            start_date: '2025-01-10',
            end_date: '2025-01-15',
            user_id: 2,
        }
    ]);
};
