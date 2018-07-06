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
}
