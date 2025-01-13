export interface IGuest {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_numbers: string[];
}

export class Guest implements IGuest {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_numbers: string[];
    constructor(rows: any)
    constructor(id: number, first_name: string, last_name: string, email: string, phone_numbers: string[]);
    constructor(id: number | any, first_name?: string, last_name?: string, email?: string, phone_numbers?: string[]) {

        if (typeof id === 'number') {
            this.id = id;
            this.first_name = first_name || '';
            this.last_name = last_name || '';
            this.email = email || '';
            this.phone_numbers = phone_numbers || [];
        } else {
            this.id = id.id || 0;
            this.first_name = id.first_name || '';
            this.last_name = id.last_name || '';
            this.email = id.email || '';
            this.phone_numbers = id.phone_numbers || [];
        }

    }

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
