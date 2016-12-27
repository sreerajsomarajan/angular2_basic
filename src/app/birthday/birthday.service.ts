import { Injectable } from '@angular/core';
import { Birthday } from './birthday.interface';

@Injectable()
export class BirthdayService {

  constructor() { }

  private users: Birthday[] = [
    { id: 1, name: 'Sreeraj S', age: 28 },
    { id: 2, name: 'Rajeev G', age: 34 },
    { id: 3, name: 'Amal Kumar', age: 29 },
    { id: 4, name: 'Prince Joseph', age: 29 },
    { id: 5, name: 'Prajeesh Balagopal', age: 29 },
    { id: 6, name: 'Al Ameen', age: 28 }
  ];

  getTodays() {
    return this.users;
  };

  getUserByID(id) {
    return this.users.find(speaker => speaker.id === Number(id));
  };
}
