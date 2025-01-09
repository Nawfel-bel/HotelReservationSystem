import { Component, inject, OnInit, signal } from '@angular/core';
import { GuestCellComponent } from '../../components/guest-cell/guest-cell.component';
import { NgFor } from '@angular/common';
import { GuestsService } from '../../services/guests.service';
import { IGuest } from '../../models/guest';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-guests',
  imports: [GuestCellComponent, NgFor],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.css'
})
export class GuestsComponent implements OnInit {
  guestService = inject(GuestsService);
  guests = signal<Array<IGuest>>([])
  ngOnInit(): void {
    this.guestService.getAllGuests()
      .pipe(
        catchError((err) => {
          console.log('something went wrong fetching guests err: ', err)
          throw err;
        })
      ).subscribe((resGuests) => {
        this.guests.set(resGuests)
        console.log(resGuests)
      })
  }
}
