import { Routes } from '@angular/router';
import { GuestsComponent } from './routes/guests/guests.component';
import { RoomsComponent } from './routes/rooms/rooms.component';
import { ReservationsComponent } from './routes/reservations/reservations.component';
import { HomeComponent } from './routes/home/home.component';
import { EditGuestComponent } from './routes/edit-guest/edit-guest.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'guests', component: GuestsComponent },
    { path: 'guests/:id', component: EditGuestComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'reservations', component: ReservationsComponent }
];
