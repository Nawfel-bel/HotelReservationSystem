import { dbKnexClient } from "../db"
import { FilterRequest } from "../Interfaces/guest";
import { getReservationsForRoomWithId } from "./reservations";

export const getRooms = async (filterRequest: FilterRequest) => {
    const { offset = 0, limit = 10 } = filterRequest;
    let orderBy = 'rooms.room_number';
    let orderDirection = 'ASC';
    //TODO: finish this

    const allRooms = await dbKnexClient('rooms')
        .join('room_types', 'rooms.room_type_id', '=', 'room_types.id')
        .select('rooms.id',
            'rooms.room_number',
            'room_types.type',
            'room_types.price',
            dbKnexClient.raw('COUNT(DISTINCT reserved_rooms.reservation_id) as reservation_count')  // Count distinct reservation_id
        )
        .leftJoin('reserved_rooms', 'rooms.id', 'reserved_rooms.room_id')
        .groupBy('rooms.id', 'rooms.room_number', 'room_types.type', 'room_types.price')
        .orderBy(orderBy)
        .offset(offset)
        .limit(limit)

    return allRooms;
}

export const getRoomsUpcomingReservations = async (id: string) => {
    let allRoomReservations = await getReservationsForRoomWithId(id)
    // determine if theyre upcoming here
    return allRoomReservations
}

export const createRoom = async (room_number: string, room_type_id: string) => {
    const [id] = await dbKnexClient('rooms').insert([{
        room_number,
        room_type_id
    }]).returning('id')

    return id;
}

export const updateRoom = async (id: string, room_number: string, room_type_id: string) => {
    await dbKnexClient('rooms').where('id', '=', id).update({
        room_number,
        room_type_id,
    })
    return id;
}
export const deleteRoom = async (id: string): Promise<void> => {
    const deletedCount = await dbKnexClient('rooms').where('id', id).del();

    if (deletedCount === 0) {
        throw new Error(`Room with id ${id} not found or already deleted`);
    }
};

export const createRoomType = async (type: string, price: number) => {
    await dbKnexClient('room_types').insert([{
        type,
        price
    }])
}
export const getRoomTypes = async () => {
    return await dbKnexClient('room_types')
}


export const updateRoomType = async (id: string, type: string, price: number) => {
    await dbKnexClient('room_types').where('id', '=', id).update({
        type,
        price,
    })
    return id;
}
