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
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    BirthdayComponent,
    UserDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    userRouting,
    appRouting
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})

export class AppModule { }
