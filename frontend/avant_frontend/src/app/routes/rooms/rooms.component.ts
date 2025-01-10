import { Component, inject, OnInit, signal } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { IRoom } from '../../models/room';
import { catchError, switchMap } from 'rxjs';
import { NgFor, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiButton, TuiDropdown } from '@taiga-ui/core';
import { TuiItemsWithMore, TuiStatus } from '@taiga-ui/kit';

@Component({
  selector: 'app-rooms',
  imports: [NgFor,
    FormsModule,
    NgForOf,
    TuiButton,
    TuiDropdown,
    TuiItemsWithMore,
    RouterLink,
    TuiStatus,
    TuiTable],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  roomService = inject(RoomsService)
  rooms = signal<IRoom[]>([])
  ngOnInit(): void {
    this.roomService.getAllRooms()
      .pipe(
        catchError((err) => {
          console.log('something went wrong fetching rooms err: ', err)
          throw err;
        })
      ).subscribe((resRooms) => {
        this.rooms.set(resRooms)
      })
  }


  async onDeleteRoomClicked(id: string) {
    await this.roomService.deleteRoomWithId(id).pipe(
      catchError((err) => {
        console.log('something went wrong deleting room err: ', err)
        throw err;
      }),
      switchMap(() => this.roomService.getAllRooms()),
      catchError((err) => {
        console.log('Something went wrong fetching rooms err:', err);
        throw err;
      })).subscribe((resGuests) => {
        this.rooms.set(resGuests)
      });

  }
}
