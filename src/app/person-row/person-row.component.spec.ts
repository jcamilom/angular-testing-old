import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonRowComponent } from './person-row.component';
import { componentRefresh } from '../../../node_modules/@angular/core/src/render3/instructions';

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
    fixture.detectChanges();
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

  it('should have name \'Carolina\' in the template', () => {
    const de = fixture.debugElement.query(By.css('h1'));
    const el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toEqual('Carolina');
  });

  it('should have name \'Federico\' in the template when value is updated', () => {
    const de = fixture.debugElement.query(By.css('h1'));
    const el = de.nativeElement;

    component.name = 'Federico';

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

    component.age = 32;

    fixture.detectChanges();
    expect(el.textContent).toEqual('Your age: 32');
  });

});
