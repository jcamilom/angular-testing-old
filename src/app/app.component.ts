import { Component } from '@angular/core';
import { Calculator } from './calculator';

import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ing-test';

  person: Person;

  constructor() {
    this.person = new Person(
      'Andres',
      'Paniagua',
      19,
      70,
      1.70
    );
  }

  ngOnInit() { }

}
