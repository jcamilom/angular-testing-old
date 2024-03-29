import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {

  @Input() user: User;
  @Output() xonSelected = new EventEmitter<User>();
  email: string;

  constructor() { }

  ngOnInit() {
  }

  public displayEmail() {
    this.email = this.user.email;
  }

  public selectUser() {
    this.xonSelected.emit(this.user);
  }

}
