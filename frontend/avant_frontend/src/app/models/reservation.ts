export interface IRoom {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone_numbers: string[];
}

export class Room implements IRoom {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone_numbers: string[];

    constructor(guestData: any) {
        this.id = guestData.id.toString();
        this.firstName = guestData.first_name;
        this.lastName = guestData.last_name;
        this.email = guestData.email;
        this.phone_numbers = guestData.phone_numbers;
    }
}