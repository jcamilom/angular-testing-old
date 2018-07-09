import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserRowComponent } from './user-row.component';
import { User } from './../user';

describe('Test for UserRowComponent', () => {
  let component: UserRowComponent;
  let fixture: ComponentFixture<UserRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRowComponent);
    component = fixture.componentInstance;
    component.user = new User('Sabina', 'sabina@mail.net', '2223344');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have \'Sabina\' as name', () => {
    expect(component.user.name).toEqual('Sabina');
  });

  it('should have \'Sabina\' as name in the template', () => {
    // Arrange
    const de = fixture.debugElement.query(By.css('h5'));
    const el = de.nativeElement;
    // Assert
    expect(el.textContent).toEqual('Sabina');
  });

  it('should have \'Ricardo\' as name after updating', () => {
    // Arrange
    const de = fixture.debugElement.query(By.css('h5'));
    const el = de.nativeElement;
    component.user.name = 'Ricardo';

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.user.name).toEqual('Ricardo');
    expect(el.textContent).toEqual('Ricardo');
  });

  it('should display the email when button clicked', () => {
    // Arrange
    const button = fixture.debugElement.query(By.css('.btn-display-email'));
    const de = fixture.debugElement.query(By.css('.user-email'));
    const el = de.nativeElement;
    button.triggerEventHandler('click', null);

    // Act
    fixture.detectChanges();

    // Assert
    expect(el.textContent).toEqual('sabina@mail.net');
  });

});
