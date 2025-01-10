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
            guest_id: 1,
        },
        {
            start_date: '2025-03-10',
            end_date: '2025-04-15',
            guest_id: 1,
        },
        {
            start_date: '2025-04-01',
            end_date: '2025-04-07',
            guest_id: 4,
        },
        {
            start_date: '2025-04-05',
            end_date: '2025-04-12',
            guest_id: 4,
        },
        {
            start_date: '2025-05-01',
            end_date: '2025-05-07',
            guest_id: 6,
        },
        {
            start_date: '2025-06-01',
            end_date: '2025-06-07',
            guest_id: 7,
        },
        {
            start_date: '2025-07-01',
            end_date: '2025-07-15',
            guest_id: 8,
        },
        {
            start_date: '2025-08-01',
            end_date: '2025-08-05',
            guest_id: 9,
        },
        {
            start_date: '2025-09-01',
            end_date: '2025-09-07',
            guest_id: 10,
        },
        {
            start_date: '2025-10-01',
            end_date: '2025-10-10',
            guest_id: 11,
        },
        {
            start_date: '2025-11-01',
            end_date: '2025-11-15',
            guest_id: 12,
        },
        {
            start_date: '2025-12-01',
            end_date: '2025-12-07',
            guest_id: 13,
        },
    ]);
};
