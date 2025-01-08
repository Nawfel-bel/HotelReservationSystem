import { dbKnexClient } from "../db"
import { CreateReservationParams, Reservation } from "../Interfaces/guest";

export const getReservationsForRoomWithId = async (id: string) => {
    let res = await dbKnexClient('reservations')
        .leftJoin('reserved_rooms', 'reservations.id', 'reserved_rooms.reservation_id')
        .select('reserved_rooms.room_id', 'reservations.id', 'reservations.start_date', 'reservations.end_date', ' reservations.guest_id')
        .where('reserved_rooms.room_id', id)
    return res;
}

export const getAllReservations = async () => {
    return await dbKnexClient('reservations')
}

export const createReservation = async ({
    room_ids,
    guest_id,
    start_date: start,
    end_date: end,
}: CreateReservationParams): Promise<number> => {
    console.log("\n\n\n  wassbai ", room_ids, guest_id, start, end, " wassbai \n\n\n")

    const { start: start_date, end: end_date } = validateDateRange(start, end);

    const isAvailable = (await checkRoomAvailability(room_ids, start_date, end_date)).length <= 0;
    if (!isAvailable) {
        throw new Error('One or more rooms are already reserved during the selected time frame.');
    }

    const [reservationId] = await dbKnexClient('reservations')
        .insert({
            guest_id: guest_id,
            start_date: start_date,
            end_date: end_date,
        })
        .returning('id');

    const roomReservations = room_ids.map((roomId) => ({
        reservation_id: reservationId.id,
        room_id: roomId,
    }));


    await dbKnexClient('reserved_rooms').insert(roomReservations);
    return reservationId;
};

export const deleteReservation = async () => {

}



const validateDateRange = (startDate: string, endDate: string): { start: Date; end: Date } => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start < now) {
        throw new Error("Start date cannot be in the past.");
    }

    if (end <= start) {
        throw new Error("End date must be after the start date.");
    }

    if (end.getTime() - start.getTime() <= 0) {
        throw new Error("Invalid date range.");
    }

    return { start, end };
};




const checkRoomAvailability = async (
    roomIds: number[],
    startDate: Date,
    endDate: Date
): Promise<Reservation[]> => {

    const overlappingReservations: Reservation[] = await dbKnexClient('reserved_rooms')
        .join('reservations', 'reserved_rooms.reservation_id', 'reservations.id')
        .whereIn('reserved_rooms.room_id', roomIds)
        .andWhere(function () {
            this.whereBetween('reservations.start_date', [startDate, endDate])
                .orWhereBetween('reservations.end_date', [startDate, endDate])
                .orWhere(function () {
                    this.where('reservations.start_date', '<', startDate)
                        .andWhere('reservations.end_date', '>', endDate);
                });
        })
        .select('reserved_rooms.room_id', 'reservations.start_date', 'reservations.end_date');

    return overlappingReservations;
};