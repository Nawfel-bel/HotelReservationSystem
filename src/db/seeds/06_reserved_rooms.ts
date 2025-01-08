import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("reserved_rooms").del();

    await knex("reserved_rooms").insert([
        { room_id: 2, reservation_id: 1 },
        { room_id: 1, reservation_id: 2 },
        { room_id: 3, reservation_id: 2 },
        { room_id: 3, reservation_id: 3 }

    ]);
};
