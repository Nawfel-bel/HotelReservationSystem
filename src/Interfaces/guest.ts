export interface IGuest {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_numbers: string[];
}

export interface FilterRequest {
    limit?: any;
    offset?: any;
    filter?: any;
}

export interface Reservation {
    reservation_id: number;
    room_id: number;
    start_date: Date;
    end_date: Date;
}

export interface CreateReservationParams {
    room_ids: number[];
    guest_id: number;
    start_date: string;
    end_date: string;
}
