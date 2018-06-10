import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8081/user-auth/auth/';

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

}
