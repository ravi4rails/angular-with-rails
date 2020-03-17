import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  
  submitted: boolean = false;
  constructor(private userService: UserService,private router: Router) { 
  }
  ngOnInit() { }
  onSubmitUser(user: User) {
    this.submitted = true;

    this.userService.createUser(user)
      .subscribe(data => {return true},
        error => {
          console.log("Error creating user");
          return Observable.throw(error);
        }
      )
    this.onCreateUser();
  }

  onCreateUser() {
    this.router.navigate(['/users']);
  }
}
