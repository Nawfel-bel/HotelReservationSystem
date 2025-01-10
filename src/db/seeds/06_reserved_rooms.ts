import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("reserved_rooms").del();

    await knex("reserved_rooms").insert([
        { room_id: 1, reservation_id: 1 },
        { room_id: 2, reservation_id: 1 },
        { room_id: 1, reservation_id: 2 },
        { room_id: 2, reservation_id: 2 },
        { room_id: 1, reservation_id: 3 },
        { room_id: 2, reservation_id: 3 },
        { room_id: 3, reservation_id: 3 },
        { room_id: 1, reservation_id: 4 },
        { room_id: 2, reservation_id: 4 },
        { room_id: 3, reservation_id: 4 },
        { room_id: 1, reservation_id: 5 },
        { room_id: 2, reservation_id: 5 },
        { room_id: 3, reservation_id: 5 },
        { room_id: 1, reservation_id: 6 },
        { room_id: 2, reservation_id: 6 },
        { room_id: 3, reservation_id: 6 },
        { room_id: 1, reservation_id: 7 },
        { room_id: 2, reservation_id: 7 },
        { room_id: 3, reservation_id: 7 },
        { room_id: 1, reservation_id: 8 },
        { room_id: 2, reservation_id: 8 },
        { room_id: 3, reservation_id: 8 },
        { room_id: 1, reservation_id: 9 },
        { room_id: 2, reservation_id: 9 },
        { room_id: 3, reservation_id: 9 },
        { room_id: 1, reservation_id: 10 },
        { room_id: 2, reservation_id: 10 },
        { room_id: 3, reservation_id: 10 },
        { room_id: 1, reservation_id: 11 },
        { room_id: 2, reservation_id: 11 },
        { room_id: 3, reservation_id: 11 },
        { room_id: 1, reservation_id: 12 },
        { room_id: 2, reservation_id: 12 },
        { room_id: 3, reservation_id: 12 },
        { room_id: 1, reservation_id: 13 },
        { room_id: 2, reservation_id: 13 },
        { room_id: 3, reservation_id: 13 }
    ]);
};
