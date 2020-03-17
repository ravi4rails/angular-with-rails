import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers: Headers;
  options: RequestOptions;
  private usersUrl = "http://localhost:3000/users";

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type' : 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map((response: Response) => <User[]>response.json())
      console.log(Response);
  } 

}