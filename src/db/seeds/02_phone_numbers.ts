import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('phone_numbers').del()

    await knex('phone_numbers').insert([
        { user_id: 1, phone_number: "5551234567" },
        { user_id: 2, phone_number: "5552345678" },
        { user_id: 2, phone_number: "5553456789" },
        { user_id: 1, phone_number: "5554567890" },
        { user_id: 2, phone_number: "5555678901" },
        { user_id: 6, phone_number: "5556789012" },
        { user_id: 7, phone_number: "5557890123" },
        { user_id: 8, phone_number: "5558901234" },
        { user_id: 9, phone_number: "5559012345" },
        { user_id: 10, phone_number: "5550123456" },
        { user_id: 11, phone_number: "5551234560" },
        { user_id: 12, phone_number: "5552345671" },
        { user_id: 13, phone_number: "5553456782" }
    ]);
};
