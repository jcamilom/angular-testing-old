import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        UsersService,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  describe('test for getUser', () => {

    it('should return the user\'s data with an id',
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend: MockBackend) => {

        // Arrange
        let dataResponse;
        const userMock = {
          'id': 1,
          'name': 'Leanne Graham',
          'username': 'Bret',
          'email': 'Sincere@april.biz',
          'address': {
            'street': 'Kulas Light',
            'suite': 'Apt. 556',
            'city': 'Gwenborough',
            'zipcode': '92998-3874',
            'geo': {
              'lat': '-37.3159',
              'lng': '81.1496'
            }
          },
          'phone': '1-770-736-8031 x56442',
          'website': 'hildegard.org',
          'company': {
            'name': 'Romaguera-Crona',
            'catchPhrase': 'Multi-layered client-server neural-net',
            'bs': 'harness real-time e-markets'
          }
        };
        const mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
        mockBackend.connections.subscribe(connection => {
          expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/1');
          connection.mockRespond(new Response(mockResponse));
        });

        // Act
        usersService.getUser(1)
        .subscribe(resp => {
          dataResponse = resp;
        });
        tick();

        // Assert
        expect(dataResponse.id).toBeDefined();
        expect(dataResponse.name).toBeDefined();
        expect(dataResponse.address).toBeDefined();


      }))
    );

    it('shouldn\'t return the user\'s data when the server fails',
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend: MockBackend) => {

        // Arrange
        let dataResponse, dataError;
        const userMock = {
          'id': 1,
          'name': 'Leanne Graham',
          'username': 'Bret',
          'email': 'Sincere@april.biz',
          'address': {
            'street': 'Kulas Light',
            'suite': 'Apt. 556',
            'city': 'Gwenborough',
            'zipcode': '92998-3874',
            'geo': {
              'lat': '-37.3159',
              'lng': '81.1496'
            }
          },
          'phone': '1-770-736-8031 x56442',
          'website': 'hildegard.org',
          'company': {
            'name': 'Romaguera-Crona',
            'catchPhrase': 'Multi-layered client-server neural-net',
            'bs': 'harness real-time e-markets'
          }
        };
        const mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
        mockBackend.connections.subscribe(connection => {
          expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/1');
          connection.mockError(new Error('error'));
        });

        // Act
        usersService.getUser(1)
          .subscribe(
            resp => { // Success
              dataResponse = resp;
            }, error => { // Error
              dataError = error;
            }
          );
        tick();

        // Assert
        expect(dataResponse).toBeUndefined();
        expect(dataError).toBeDefined();

      }))
    );

  });

});
