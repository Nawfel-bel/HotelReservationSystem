import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("room_types").del();

    await knex("room_types").insert([
        { id: 1, type: "Single", price: 100.00 },
        { id: 2, type: "Double", price: 150.00 },
        { id: 3, type: "Suite", price: 250.00 },
        { id: 4, type: "Penthouse", price: 500.00 }
    ]);
};
