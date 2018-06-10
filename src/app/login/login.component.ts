import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { User } from './user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  user: User;

  constructor(private router : Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.isValidUser(this.email, this.password).subscribe(user => {
      this.user = user

      if(this.user != null && this.user.email === this.email) {
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.router.navigate(['users']);
      }else {
        alert("Invalid credentials.")
      }
    });

  }
}
