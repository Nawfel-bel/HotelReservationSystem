export interface IReservation {
    id: string;
    startDate: string;
    endDate: string;
    guestId: string;
    roomIds: string[];
}

export class Reservation implements IReservation {
    id: string;
    startDate: string;
    endDate: string;
    guestId: string;
    roomIds: string[];

    constructor(reservationData: any) {
        this.id = reservationData.reservation_id.toString();
        this.startDate = reservationData.start_date;
        this.endDate = reservationData.end_date;
        this.guestId = reservationData.guest_id;
        this.roomIds = reservationData.room_ids;
    }
}