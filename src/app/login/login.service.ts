import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { User } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8081/user-auth/auth/';

  isValidUser(email, password): Observable<User>  {

    return this.http.get<User>(this.userUrl+'find/?email='+email+'&password='+password);

  }

}
