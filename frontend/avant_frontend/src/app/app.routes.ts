import { Routes } from '@angular/router';
import { GuestsComponent } from './routes/guests/guests.component';
import { RoomsComponent } from './routes/rooms/rooms.component';
import { ReservationsComponent } from './routes/reservations/reservations.component';
import { HomeComponent } from './routes/home/home.component';
import { EditGuestComponent } from './routes/edit-guest/edit-guest.component';
import { EditRoomComponent } from './routes/edit-room/edit-room.component';
import { EditReservationComponent } from './routes/edit-reservation/edit-reservation.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'guests', component: GuestsComponent },
    { path: 'guests/:id', component: EditGuestComponent },


    { path: 'rooms', component: RoomsComponent },
    { path: 'rooms/:id', component: EditRoomComponent },

    { path: 'reservations', component: ReservationsComponent },
    { path: 'reservations/:id', component: EditReservationComponent },

];
