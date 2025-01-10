import { Component, inject, OnInit, signal } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { IReservation } from '../../models/reservation';
import { catchError, switchMap } from 'rxjs';
import { NgFor, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiButton, TuiDropdown } from '@taiga-ui/core';
import { TuiItemsWithMore, TuiStatus } from '@taiga-ui/kit';

@Component({
  selector: 'app-reservations',
  imports: [NgFor,
    FormsModule,
    NgForOf,
    TuiButton,
    TuiDropdown,
    TuiItemsWithMore,
    RouterLink,
    TuiStatus,
    TuiTable],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent implements OnInit {
  reservationsService = inject(ReservationsService)
  reservations = signal<IReservation[]>([])
  ngOnInit(): void {
    this.reservationsService.getAllReservations()
      .pipe(
        catchError((err) => {
          console.log('something went wrong fetching reservations err: ', err)
          throw err;
        })
      ).subscribe((resReservations) => {
        this.reservations.set(resReservations)
        console.log(resReservations)
      })


  }


  async onDeleteReservationClicked(id: string) {
    await this.reservationsService.deleteReservationWithId(id).pipe(
      catchError((err) => {
        console.log('something went wrong deleting reservation err: ', err)
        throw err;
      }),
      switchMap(() => this.reservationsService.getAllReservations()),
      catchError((err) => {
        console.log('Something went wrong fetching reservations err:', err);
        throw err;
      })).subscribe((resReservations) => {
        this.reservations.set(resReservations)
      });

  }
}
