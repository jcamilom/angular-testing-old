import { Component, OnInit } from '@angular/core';

import { User } from './../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  selectedUser: User;

  constructor() {
    this.users.push(new User('Federico', 'fede@mail.net', '321'));
    this.users.push(new User('Antonia', 'antonia@mail.net', '123'));
    this.users.push(new User('Pedro', 'pedrito@mail.net', '3345'));
   }

  ngOnInit() {
    this.selectedUser = this.users[1];
  }

  public select(user: User) {
    this.selectedUser = user;
  }

}
