import { Component, OnInit, Input } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {

  @Input() user: User;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  public displayEmail() {
    this.email = this.user.email;
  }

}
