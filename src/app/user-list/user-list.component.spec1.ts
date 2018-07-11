import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsersService } from './../users.service';
import { MockUsersService } from './../users.service.mock';

import { UserListComponent } from './user-list.component';
import { UserRowComponent } from './../user-row/user-row.component';

describe('Test for UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserListComponent,
        UserRowComponent
      ],
      providers: [{provide: UsersService, useClass: MockUsersService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an app-user-row', () => {
    const de = fixture.debugElement.query(By.css('app-user-row'));
    expect(de).toBeTruthy();
  });

  it('should create', () => {
    expect(component.users.length).toEqual(3);
  });

  it('should assign second element of \'users\' to \'selectedUser\'', () => {
    expect(component.selectedUser.name).toEqual('Antonia');
  });

  it('should received emited selectedUser when select button is clicked in app-user-row component', () => {
    // Arrange
    const button = fixture.debugElement.query(By.css('app-user-row .btn-selected'));

    // Act
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Assert
    expect(component.selectedUser.name).toEqual('Federico');
  });

});
