import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// HTML components
import { NavbarComponent } from './navbar/navbar.component';

// Routing
import { appRouting } from './app.routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [Title]
})

export class AppComponent {
  title = 'Small FB';

  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle || 'Small FB - Home');
  }
}

console.log(appRouting);
