import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Component({
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) {
  }


  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => { this.user = data;
            this.router.navigate(['login']);
        });
  };

}
