import { Routes } from '@angular/router';
import { GuestsComponent } from './routes/guests/guests.component';
import { RoomsComponent } from './routes/rooms/rooms.component';
import { ReservationsComponent } from './routes/reservations/reservations.component';
import { HomeComponent } from './routes/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'guests', component: GuestsComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'reservations', component: ReservationsComponent }
];
