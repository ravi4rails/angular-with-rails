import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { UserService } from './user.service';
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor( private userService: UserService ) { }

  ngOnInit() {
    // let timer = Observable.timer(0,5000);
    // timer.subscribe(() => this.getUsers());
  }
  
  getUsers() {
    this.userService.getUsers() 
      .subscribe(users => this.users = users);
  }
}
