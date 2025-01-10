import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IReservation, Reservation } from '../models/reservation';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor() { }

  http = inject(HttpClient)
  reservationsUrl = 'http://localhost:1300/api/v1/reservations';

  $reservations = signal<IReservation[]>([]);
  getAllReservations(): Observable<IReservation[]> {
    return this.http.get<any[]>(this.reservationsUrl).pipe(map((rooms) => {
      let reservationsData = rooms.map(reservationData => new Reservation(reservationData))
      this.$reservations.set(reservationsData)
      return reservationsData;
    }));
  }

  createReservation(reservationData: FormData): Observable<IReservation> {
    return this.http.post<IReservation>(this.reservationsUrl, reservationData);

  }

  deleteReservationWithId(id: string): Observable<any> {
    return this.http.delete(this.reservationsUrl + '/' + id);
  }
}
