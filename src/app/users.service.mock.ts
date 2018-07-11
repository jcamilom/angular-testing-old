import { Observable, of } from 'rxjs';

import { User } from './user';

export class MockUsersService {

    public getAllUsers(): Observable<User[]> {
        return of([
            new User('Federico', 'fede@mail.net', '321'),
            new User('Antonia', 'antonia@mail.net', '123'),
            new User('Pedro', 'pedrito@mail.net', '3345')
        ]);
    }
}
