import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  RequestMethod
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
        let dataResponse, dataUrl, dataMethod, dataToken;
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
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          dataToken = connection.request.headers.get('API-TOKEN');
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
        expect(dataUrl).toEqual('http://jsonplaceholder.typicode.com/users/1');
        expect(dataMethod).toBe(RequestMethod.Get);
        expect(dataToken === null).toBeFalsy();

      }))
    );

    it('shouldn\'t return the user\'s data when the server fails',
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend: MockBackend) => {

        // Arrange
        let dataResponse, dataUrl, dataMethod, dataError;
        mockBackend.connections.subscribe(connection => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
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
        expect(dataUrl).toBe('http://jsonplaceholder.typicode.com/users/1');
        expect(dataMethod).toBe(RequestMethod.Get);

      }))
    );

  });

  describe('test for createUser', () => {

    it('should return a new user',
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend) => {

        // Arrange
        let dataResponse, dataUrl, dataMethod, dataError;
        const userMock = {
          'id': 1,
          'name': 'Juanito Alimaña',
          'username': 'juañi',
          'email': 'juañi@gmail.com'
        };
        const mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
        mockBackend.connections.subscribe(connection => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          connection.mockRespond(new Response(mockResponse));
        });

        // Arrange
        const newUser = {
          'name': 'Juanito Alimaña',
          'username': 'juañi',
          'email': 'juañi@gmail.com'
        };
        usersService.createUser(newUser)
          .subscribe(
            resp => { // Success
              dataResponse = resp;
            }, error => { // Error
              dataError = error;
            }
          );
        tick();

        // Assert
        expect(dataError).toBeUndefined();
        expect(dataResponse.id).toBeDefined();
        expect(dataResponse.name).toEqual('Juanito Alimaña');
        expect(dataResponse.username).toEqual('juañi');
        expect(dataResponse.email).toEqual('juañi@gmail.com');
        expect(dataUrl).toBe('http://jsonplaceholder.typicode.com/users');
        expect(dataMethod).toBe(RequestMethod.Post);

      }))
    );

    it('shouldn\'t return a new user when the server is offline',
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend) => {

        // Arrange
        let dataResponse, dataUrl, dataMethod, dataError;
        mockBackend.connections.subscribe(connection => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          connection.mockError(new Error('error'));
        });

        // Arrange
        const newUser = {
          'name': 'Juanito Alimaña',
          'username': 'juañi',
          'email': 'juañi@gmail.com'
        };
        usersService.createUser(newUser)
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
        expect(dataUrl).toBe('http://jsonplaceholder.typicode.com/users');
        expect(dataMethod).toBe(RequestMethod.Post);

      }))
    );

  });

  describe('test for updateUser', () => {

    it('should return an updated user',
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend) => {

        // Arrange
        let dataResponse, dataUrl, dataMethod, dataError;
        const userMock = {
          'id': 12,
          'name': 'Juanito Maraña',
          'username': 'juanma',
          'email': 'juanma@gmail.com'
        };
        const mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
        mockBackend.connections.subscribe(connection => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          connection.mockRespond(new Response(mockResponse));
        });

        // Act
        const user = {
          id: 12,
          'name': 'Juanito Maraña',
          'username': 'juanma',
          'email': 'juanma@gmail.com'
        };
        usersService.updateUser(user)
          .subscribe(
            resp => { // Success
              dataResponse = resp;
            }, error => { // Error
              dataError = error;
            }
          );
        tick();

        // Assert
        expect(dataError).toBeUndefined();
        expect(dataResponse.name).toEqual('Juanito Maraña');
        expect(dataUrl).toBe('http://jsonplaceholder.typicode.com/users/12');
        expect(dataMethod).toBe(RequestMethod.Put);

      }))
    );

    it('should return an error when the server is offline',
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend) => {

        // Arrange
        let dataResponse, dataUrl, dataMethod, dataError;
        mockBackend.connections.subscribe(connection => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          connection.mockError(new Error('error'));
        });

        // Act
        const user = {
          id: 12,
          'name': 'Juanito Maraña',
          'username': 'juanma',
          'email': 'juanma@gmail.com'
        };
        usersService.updateUser(user)
          .subscribe(
            resp => { // Success
              dataResponse = resp;
            }, error => { // Error
              dataError = error;
            }
          );
        tick();

        // Assert
        expect(dataError).toBeDefined();
        expect(dataResponse).toBeUndefined();
        expect(dataUrl).toBe('http://jsonplaceholder.typicode.com/users/12');
        expect(dataMethod).toBe(RequestMethod.Put);

      }))
    );

  });

  describe('test for deleteUser', () => {

    it('should return an empty object: {}',
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend) => {

        // Arrange
        let dataResponse, dataUrl, dataMethod, dataError;
        const mockResponse = new ResponseOptions({body: '{}'});
        mockBackend.connections.subscribe(connection => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          connection.mockRespond(new Response(mockResponse));
        });

        // Act
        usersService.deleteUser(68)
          .subscribe(
            resp => { // Success
              dataResponse = resp;
            }, error => { // Error
              dataError = error;
            }
          );
        tick();

        // Assert
        expect(dataError).toBeUndefined();
        expect(dataResponse).toEqual({});
        expect(dataUrl).toBe('http://jsonplaceholder.typicode.com/users/68');
        expect(dataMethod).toBe(RequestMethod.Delete);

      }))
    );

    it('should return an error when the server is offline',
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend) => {

        // Arrange
        let dataResponse, dataUrl, dataMethod, dataError;
        mockBackend.connections.subscribe(connection => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          connection.mockError(new Error('error'));
        });

        // Act
        usersService.deleteUser(68)
          .subscribe(
            resp => { // Success
              dataResponse = resp;
            }, error => { // Error
              dataError = error;
            }
          );
        tick();

        // Assert
        expect(dataError).toBeDefined();
        expect(dataResponse).toBeUndefined();
        expect(dataUrl).toEqual('http://jsonplaceholder.typicode.com/users/68');
        expect(dataMethod).toBe(RequestMethod.Delete);

      }))
    );

  });

  describe('test for getAllUsers', () => {

    it('should return all the users',
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend: MockBackend) => {

        // Arrange
        let dataResponse, dataUrl, dataMethod, dataToken;
        const usersMock = [
          {
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
          },
          {
            'id': 2,
            'name': 'Ervin Howell',
            'username': 'Antonette',
            'email': 'Shanna@melissa.tv',
            'address': {
              'street': 'Victor Plains',
              'suite': 'Suite 879',
              'city': 'Wisokyburgh',
              'zipcode': '90566-7771',
              'geo': {
                'lat': '-43.9509',
                'lng': '-34.4618'
              }
            },
            'phone': '010-692-6593 x09125',
            'website': 'anastasia.net',
            'company': {
              'name': 'Deckow-Crist',
              'catchPhrase': 'Proactive didactic contingency',
              'bs': 'synergize scalable supply-chains'
            }
          },
          {
            'id': 3,
            'name': 'Clementine Bauch',
            'username': 'Samantha',
            'email': 'Nathan@yesenia.net',
            'address': {
              'street': 'Douglas Extension',
              'suite': 'Suite 847',
              'city': 'McKenziehaven',
              'zipcode': '59590-4157',
              'geo': {
                'lat': '-68.6102',
                'lng': '-47.0653'
              }
            },
            'phone': '1-463-123-4447',
            'website': 'ramiro.info',
            'company': {
              'name': 'Romaguera-Jacobson',
              'catchPhrase': 'Face to face bifurcated interface',
              'bs': 'e-enable strategic applications'
            }
          },
        ];
        const mockResponse = new ResponseOptions({body: JSON.stringify(usersMock)});
        mockBackend.connections.subscribe(connection => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          dataToken = connection.request.headers.get('API-TOKEN');
          connection.mockRespond(new Response(mockResponse));
        });

        // Act
        usersService.getAllUsers()
        .subscribe(resp => {
          dataResponse = resp;
        });
        tick();

        // Assert
        expect(dataResponse.length).toEqual(3);
        expect(dataUrl).toEqual('http://jsonplaceholder.typicode.com/users');
        expect(dataMethod).toBe(RequestMethod.Get);
        expect(dataToken === null).toBeFalsy();

      }))
    );

    it('shouldn\'t return the users\'s data when the server fails',
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend: MockBackend) => {

        // Arrange
        let dataResponse, dataUrl, dataMethod, dataError;
        mockBackend.connections.subscribe(connection => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          connection.mockError(new Error('error'));
        });

        // Act
        usersService.getAllUsers()
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
        expect(dataUrl).toBe('http://jsonplaceholder.typicode.com/users');
        expect(dataMethod).toBe(RequestMethod.Get);

      }))
    );

  });

});
