export interface IRoom {
    id: string;
    roomNumber: string;
    roomType: string;
    price: string;
    reservationCount: number

}

export class Room implements IRoom {
    id: string;
    roomNumber: string;
    roomType: string;
    price: string;
    reservationCount: number

    constructor(roomData: any) {
        this.id = roomData.id.toString();
        this.roomNumber = roomData.room_number;
        this.roomType = roomData.type;
        this.price = roomData.price.toString();
        this.reservationCount = roomData.reservation_count;
    }
}