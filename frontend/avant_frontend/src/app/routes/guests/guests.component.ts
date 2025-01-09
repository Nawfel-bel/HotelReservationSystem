import { Component } from '@angular/core';
import { GuestCellComponent } from '../../components/guest-cell/guest-cell.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-guests',
  imports: [GuestCellComponent, NgFor],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.css'
})
export class GuestsComponent {
  protected readonly guests = [
    { first_name: 'peach_F', last_name: 'peach_L', email: "peach@foobar.com" },
    { first_name: 'bowser_F', last_name: 'bowser_L', email: "bowser@foobar.com" },
    { first_name: 'mario_F', last_name: 'mario_L', email: "mario@foobar.com" }
    ,] as const;
}
