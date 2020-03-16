import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService {
  private usersUrl = "http://localhost:3000/users";

  constructor(private http: Http) {}

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map((response: Response) => <User[]>response.json())
  }
}