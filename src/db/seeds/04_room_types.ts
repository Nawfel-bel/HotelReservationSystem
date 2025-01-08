import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("room_types").del();

    await knex("room_types").insert([
        { type: "Single", price: 100.00 },
        { type: "Double", price: 150.00 },
        { type: "Suite", price: 250.00 },
        { type: "Penthouse", price: 500.00 }
    ]);
};
