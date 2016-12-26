import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})

export class UserComponent implements OnInit {
  users;

  constructor(userService: UserService) {
    this.users = userService.getUsers();
  }

  ngOnInit() {
  }

}
