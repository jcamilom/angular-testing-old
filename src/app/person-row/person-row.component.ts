import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-row',
  // templateUrl: './person-row.component.html',
  template: '<h1>{{name}}</h1>',
  styleUrls: ['./person-row.component.css']
})
export class PersonRowComponent implements OnInit {

  name: string = 'Carolina';
  age: number = 23;

  constructor() { }

  ngOnInit() {
  }

}
