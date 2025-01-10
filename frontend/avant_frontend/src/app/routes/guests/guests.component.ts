import { Component, inject, OnInit, signal } from '@angular/core';
import { NgFor, NgForOf } from '@angular/common';
import { GuestsService } from '../../services/guests.service';
import { IGuest } from '../../models/guest';
import { catchError, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiButton, TuiDropdown } from '@taiga-ui/core';
import { TuiItemsWithMore, TuiStatus } from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-guests',
  imports: [NgFor,
    FormsModule,
    NgForOf,
    TuiButton,
    TuiDropdown,
    TuiItemsWithMore,
    RouterLink,
    TuiStatus,
    TuiTable],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.css'


})
export class GuestsComponent implements OnInit {
  guestService = inject(GuestsService);

  guests = signal<IGuest[]>([])
  ngOnInit(): void {
    this.guestService.getAllGuests()
      .pipe(
        catchError((err) => {
          console.log('something went wrong fetching guests err: ', err)
          throw err;
        })
      ).subscribe((resGuests) => {
        this.guests.set(resGuests)
      })
  }

  async onDeleteGuestClicked(id: string) {
    await this.guestService.deleteGuestWithId(id).pipe(
      catchError((err) => {
        console.log('something went wrong fetching guests err: ', err)
        throw err;
      }),
      switchMap(() => this.guestService.getAllGuests()),
      catchError((err) => {
        console.log('Something went wrong fetching guests:', err);
        throw err;
      })).subscribe((resGuests) => {
        this.guests.set(resGuests)
      });
  }
}
