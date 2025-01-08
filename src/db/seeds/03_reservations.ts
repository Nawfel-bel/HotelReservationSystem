import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("reservations").del();

    await knex("reservations").insert([
        {
            start_date: '2025-02-01',
            end_date: '2025-02-07',
            guest_id: 1,
        },
        {
            start_date: '2025-02-10',
            end_date: '2025-02-15',
            guest_id: 2,
        },
        {
            start_date: '2025-03-10',
            end_date: '2025-04-15',
            guest_id: 3,
        }
    ]);
};
