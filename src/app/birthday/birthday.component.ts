import { Component, OnInit } from '@angular/core';
import { BirthdayService } from './birthday.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css'],
  providers: [BirthdayService]
})

export class BirthdayComponent implements OnInit {
  title = 'Birthdays'
  today: number = Date.now();
  users;

  constructor(birthdayService: BirthdayService) {
    this.users = birthdayService.getTodays();
  }

  ngOnInit() {
  }

}
