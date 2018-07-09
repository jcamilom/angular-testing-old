import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonRowComponent } from './person-row.component';
import { componentRefresh } from '../../../node_modules/@angular/core/src/render3/instructions';

describe('Test for PersonRowComponent', () => {
  let component: PersonRowComponent;
  let fixture: ComponentFixture<PersonRowComponent>;

  // Arrange
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRowComponent ],
    });

    fixture = TestBed.createComponent(PersonRowComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have \'Carolina\' as name', () => {
    expect(component.name).toEqual('Carolina');
  });

  it('should have 23 as the age', () => {
    expect(component.age).toEqual(23);
  });

});
