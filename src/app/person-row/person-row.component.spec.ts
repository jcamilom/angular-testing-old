import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonRowComponent } from './person-row.component';
import { Person } from './../person';

describe('Test for PersonRowComponent', () => {
  let component: PersonRowComponent;
  let fixture: ComponentFixture<PersonRowComponent>;

  // Arrange
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRowComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRowComponent);
    component = fixture.componentInstance;

    component.person = new Person(
      'Carolina',
      'Velez',
      23,
      65,
      1.75,
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have \'Carolina\' as name', () => {
    expect(component.person.name).toEqual('Carolina');
  });

  it('should have 23 as the age', () => {
    expect(component.person.age).toEqual(23);
  });

  it('should have name \'Carolina\' in the template', () => {
    const de = fixture.debugElement.query(By.css('h1'));
    const el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toEqual('Carolina');
  });

  it('should have name \'Federico\' in the template when value is updated', () => {
    const de = fixture.debugElement.query(By.css('h1'));
    const el = de.nativeElement;

    component.person.name = 'Federico';

    fixture.detectChanges();
    expect(el.textContent).toEqual('Federico');
  });

  it('should have \'Your age: 23\' in the template', () => {
    const de = fixture.debugElement.query(By.css('h2'));
    const el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toEqual('Your age: 23');
  });

  it('should have \'Your age: 32\' in the template when value is updated', () => {
    const de = fixture.debugElement.query(By.css('h2'));
    const el = de.nativeElement;

    component.person.age = 32;

    fixture.detectChanges();
    expect(el.textContent).toEqual('Your age: 32');
  });

});
