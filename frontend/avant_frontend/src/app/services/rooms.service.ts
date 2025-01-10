import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IRoom, Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }


  http = inject(HttpClient)
  roomsUrl = 'http://localhost:1300/api/v1/rooms';

  $rooms = signal<IRoom[]>([]);
  getAllRooms(): Observable<IRoom[]> {
    return this.http.get<any[]>(this.roomsUrl).pipe(map((rooms) => {
      let roomsData = rooms.map(roomData => new Room(roomData))
      this.$rooms.set(roomsData)
      return roomsData;
    }));
  }

  updateRoomWithId(id: string, roomData: FormData): Observable<IRoom> {
    return this.http.put<IRoom>(`${this.roomsUrl}/${id}`, roomData);

  }

  createRoom(roomData: FormData): Observable<IRoom> {
    return this.http.post<IRoom>(this.roomsUrl, roomData);

  }

  deleteRoomWithId(id: string): Observable<any> {
    return this.http.delete(this.roomsUrl + '/' + id);
  }
}
