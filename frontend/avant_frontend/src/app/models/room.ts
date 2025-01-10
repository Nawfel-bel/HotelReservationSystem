export interface IRoom {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone_numbers: string[];
}

export class Room implements IRoom {
    id: string;
    roomNumber: string;
    roomType: string;
    price: string;

    constructor(roomData: any) {
        this.id = roomData.id.toString();
        this.roomNumber =roomData.roomNumber;
        this.roomType = roomData.roomType;
        this.price = roomData.price
    }
}