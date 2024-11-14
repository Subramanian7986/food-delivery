import { Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';

export const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'restaurant/:id', component: RestaurantDetailComponent },
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
];
