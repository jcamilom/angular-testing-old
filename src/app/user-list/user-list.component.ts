import { Component, OnInit } from '@angular/core';

import { User } from './../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: User;

  constructor() {
    this.user = new User('Federico', 'fede@mail.net', '321');
   }

  ngOnInit() {
  }

}
