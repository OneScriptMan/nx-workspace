import { Injectable } from '@angular/core';
import { IUsers } from './iusers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}
  url: string = 'https://jsonplaceholder.typicode.com/users';

  /**
   * Retrieves the list of users.
   * @return {Observable<IUsers[]>} The list of users.
   */
  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.url);
  }
}
