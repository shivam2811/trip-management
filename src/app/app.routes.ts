import { Routes } from '@angular/router';
import path from 'path';
import { TripManagerComponent } from './trip-manager/trip-manager.component';

export const routes: Routes = [
    { path: '', component: TripManagerComponent , pathMatch: 'full' },

    { path: 'trip', component: TripManagerComponent , pathMatch: 'full' },
];
