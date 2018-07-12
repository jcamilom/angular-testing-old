import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable, of } from 'rxjs';

import { UsersService } from './../users.service';
import { MockUsersService } from './../users.service.mock';

import { UserListComponent } from './user-list.component';
import { UserRowComponent } from './../user-row/user-row.component';

import { User } from './../user';


describe('Test for UserListComponent with spies', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;
    let usersService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          UserListComponent,
          UserRowComponent
        ],
        imports: [HttpModule],
        providers: [{provide: UsersService, useClass: UsersService}]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(UserListComponent);
      component = fixture.componentInstance;
      usersService = fixture.debugElement.injector.get(UsersService);
    });

    it('should create', () => {
        // Act
        fixture.detectChanges();
        // Assert
        expect(component).toBeTruthy();
    });

    it('should call getAllUsers', () => {
      // Arrange
      const mockUsers = of([
          new User('Federica', 'federica@mail.net', '321'),
          new User('Antonia', 'toni@mail.net', '123'),
      ]);
      spyOn(usersService, 'getAllUsers').and.returnValue(mockUsers);
      // Act
      fixture.detectChanges();
      // Assert
      expect(usersService.getAllUsers).toHaveBeenCalled();
      expect(usersService.getAllUsers).toHaveBeenCalledTimes(1);
      expect(component.users.length).toEqual(2);
    });

    describe('Test for getUser', () => {

      it('should have users[0] as user', () => {
        fixture.detectChanges();
        // Arrange
        const mockUser = of(
          new User('Matilda', 'mati@mail.net', '123'),
        );
        spyOn(usersService, 'getUser').and.returnValue(mockUser);
        // Act
        component.getUser(122);
        // Assert
        expect(component.users[0].name).toEqual('Matilda');
      });

      it('should call getUser with 1 parameter', () => {
        fixture.detectChanges();
        // Arrange
        const mockUser = of(
          new User('Samantha', 'sami@mail.net', '123'),
        );
        spyOn(usersService, 'getUser').and.returnValue(mockUser);
        // Act
        component.getUser(133);
        // Assert
        expect(usersService.getUser).toHaveBeenCalled();
        expect(usersService.getUser).toHaveBeenCalledWith(133);
      });
    });

});
