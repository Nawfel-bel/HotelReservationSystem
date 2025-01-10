import { inject, Injectable, signal } from '@angular/core';
import { Guest, IGuest } from '../models/guest';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  http = inject(HttpClient)
  guestUrl = 'http://api:3000/api/v1/guests';

  constructor() { }

  // $guests: Signal<IGuest[] | undefined> = toSignal(this.http.get<any[]>(this.guestUrl).pipe(map((guests) => {
  //   let guestData = guests.map(guestData => new Guest(guestData));
  //   console.log('wassabi ', guestData)
  //   return guestData
  // })))

  $guests = signal<IGuest[]>([]);
  getAllGuests(): Observable<IGuest[]> {
    return this.http.get<any[]>(this.guestUrl).pipe(map((guests) => {
      let guestData = guests.map(guestData => new Guest(guestData))
      this.$guests.set(guestData)
      return guestData;
    }));

  }

  updateGuestWithId(id: string, guestData: FormData): Observable<IGuest> {
    return this.http.put<IGuest>(`${this.guestUrl}`, { user_id: parseInt(id), ...guestData });

  }

  createGuest(guestData: FormData): Observable<IGuest> {
    return this.http.post<IGuest>(this.guestUrl, guestData);

  }

  deleteGuestWithId(id: string): Observable<any> {
    return this.http.delete(this.guestUrl + '/' + id);
  }

}
