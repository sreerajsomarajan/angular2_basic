import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BirthdayComponent } from './birthday/birthday.component';

export const appRouting = RouterModule.forRoot([
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'birthdays', component: BirthdayComponent, data: { title: 'Birthdays' } },
  { path: '**', redirectTo: 'home' }
]);
