import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';
import { NotificationSettingsComponent } from '../notification-settings/notification-settings.component';

export const profileRouting = RouterModule.forChild([
  { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } },
  { path: 'profile_personal', component: PersonalInformationComponent, data: { title: 'Personal Information' } },
  { path: 'account_settings', component: AccountSettingsComponent, data: { title: 'Account Settings' } },
  { path: 'notification_settings', component: NotificationSettingsComponent, data: { title: 'Notification Settings' } },
]);
