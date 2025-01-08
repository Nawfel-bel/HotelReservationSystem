import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("rooms").del();

    const roomTypes = await knex("room_types").select("id");

    await knex("rooms").insert([
        { id: 1, room_number: "101", room_type_id: 1 },
        { id: 3, room_number: "201", room_type_id: 2 },
        { id: 2, room_number: "102", room_type_id: 3 },
        { id: 4, room_number: "202", room_type_id: 4 }
    ]);
};
