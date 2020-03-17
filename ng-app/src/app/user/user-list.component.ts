import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user.component.css']
})
export class UserListComponent implements OnInit {
  private users: User[];
  errorMessage: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers() {
    this.userService.getUsers() 
      .subscribe(users => this.users = users);
  }
  
  showUser(user: User): void {
    let userLink = ['/users', user.id];
    this.router.navigate(userLink);
  }
}
