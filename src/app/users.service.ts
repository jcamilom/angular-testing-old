import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  path = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: Http
  ) { }

  // TODO: update Http to HttpClient and use rxjs v6
  public getUser(id: number): Observable<any> {
    return this.http.get(`${this.path}/${id}`)
      .pipe(
        map(resp => resp.json())
      );
  }

  public createUser(newUser: any) {
    const data = JSON.stringify(newUser);
    return this.http.post(`${this.path}`, data)
    .pipe(
      map(resp => resp.json())
    );
  }

  public updateUser(user: any) {
    const id = user.id;
    const data = JSON.stringify(user);
    return this.http.put(`${this.path}/${id}`, data)
      .pipe(
        map(resp => resp.json())
      );
  }

  public deleteUser(id: number) {
    return this.http.delete(`${this.path}/${id}`)
      .pipe(
        map(resp => resp.json())
      );
  }

}
