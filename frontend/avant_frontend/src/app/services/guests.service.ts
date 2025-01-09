import { inject, Injectable } from '@angular/core';
import { Guest, IGuest } from '../models/guest';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  http = inject(HttpClient)

  getAllGuests(): Observable<IGuest[]> {
    const url = 'http://localhost:1300/api/v1/guests'
    return this.http.get<any[]>(url).pipe(map((guests) => {
      return guests.map(guestData => new Guest(guestData))
    }
    ));

  }


  guests: IGuest[] = [
    {
      id: '1', firstName: 'peach_F', lastName: 'peach_L', email: "peach@foobar.com", phone_numbers: ['091233213']
    },
    {
      id: '2', firstName: 'apple_F', lastName: 'apple_L', email: "apple@foobar.com", phone_numbers: ['091233214']
    },
    {
      id: '3', firstName: 'mango_F', lastName: 'mango_L', email: "mango@foobar.com", phone_numbers: ['091233215']
    },
    {
      id: '4', firstName: 'banana_F', lastName: 'banana_L', email: "banana@foobar.com", phone_numbers: ['091233216']
    },
    {
      id: '5', firstName: 'cherry_F', lastName: 'cherry_L', email: "cherry@foobar.com", phone_numbers: ['091233217']
    }
  ]
  constructor() { }
}
