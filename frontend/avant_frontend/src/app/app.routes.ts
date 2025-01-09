import { Routes } from '@angular/router';
import HomeComponent from './home/home.component';

export const routes: Routes = [
    { path: 'guests', component: HomeComponent },
    { path: 'rooms', component: HomeComponent },
    { path: 'reservations', component: HomeComponent }
];
