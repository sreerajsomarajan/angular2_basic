// Modules
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BirthdayComponent }   from './birthday/birthday.component';
import { UserDetailComponent } from './user/user-detail.component';

// Routing
import { appRouting } from './app.routing'
import { userRouting }   from './user/user.routing';
import { profileRouting }   from './profile/profile.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    BirthdayComponent,
    UserDetailComponent,
    NavbarComponent,
    ProfileComponent,
    PersonalInformationComponent,
    AccountSettingsComponent,
    NotificationSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    userRouting,
    profileRouting,
    appRouting
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})

export class AppModule { }
