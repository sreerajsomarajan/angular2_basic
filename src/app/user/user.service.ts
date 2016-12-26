import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable()
export class UserService {

  private users: User[] = [
    { id: 1, name: 'Sreeraj S', bio: 'Co-Founder of @UltimateAngular. Developer. Hacker. Community backer. Author and blogger. Console logger.' },
    { id: 2, name: 'Rajeev G', bio: 'Developer Advocate @Telerik / @ProgressSW. Co-founder @UltimateAngular. Author. Developer Expert @google. Lesser half of @RachaelLPurser. @ken_wheeler advocate.' },
    { id: 3, name: 'Amal Kumar', bio: 'JavaScript ninja, image processing expert, software quality fanatic' },
    { id: 4, name: 'Prince Joseph', bio: 'CTO @gethumancom, Google Developer Expert (GDE), Host of @AngularAir, Boston Angular Meetup Co-organizer, Boston College \'00, ♥ Red Sox' },
    { id: 5, name: 'Prajeesh Balagopal', bio: 'I like headphones, art, skateboarding and coding. Angular GDE at @Google, @thoughtram co-founder and creator of @5thingsAngular' },
    { id: 6, name: 'Al Ameen', bio: 'Mr. Rogers of JavaScript. Victor makes Angular. He also toys with eclectic programming technologies and obsesses over fonts and keyboard layouts.' }
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUserByID(id) {
    return this.users.find(speaker => speaker.id === Number(id));
  }

}


