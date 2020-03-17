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
  }

  getUser(id: number) {
    return this.http.get(this.usersUrl + '/' + id + '.json')
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post(this.usersUrl, JSON.stringify(user), this.options)
      .map(
        (response: Response) => {
          console.log("Upload img service", response);
        })
      .catch(this.handleError);
    }

  deleteUser(id: number): Observable<User> {
    const url  = `${this.usersUrl}/${id}`;
    return this.http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateUser(user: User): Observable<User> {
    const url  = `${this.usersUrl}/${user.id}`;
    return this.http.put(url, JSON.stringify(user),
      this.options)
        .map((res: Response) => res.json());
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.log(errMsg);
    console.error(errMsg); // log to console instead
    return Observable.of(error);
  } 

}