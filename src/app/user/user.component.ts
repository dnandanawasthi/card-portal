import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    var userDetails = JSON.parse(localStorage.getItem("currentUser"));
    if(userDetails != null) {
      this.user = <User>userDetails;
    } else {
      this.router.navigate(['login']);
    }
  };

}


