import { Routes } from '@angular/router';
import { GuestsComponent } from './guests/guests.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ReservationsComponent } from './reservations/reservations.component';

export const routes: Routes = [
    { path: 'guests', component: GuestsComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'reservations', component: ReservationsComponent }
];
