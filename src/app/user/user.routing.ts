import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';

export const userRouting = RouterModule.forChild([
  { path: 'users/:id', component: UserDetailComponent, data: { title: 'User Details' } },
  { path: 'users', component: UserComponent, data: { title: 'Users' } }
]);
