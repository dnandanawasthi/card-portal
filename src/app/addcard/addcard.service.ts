import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Card } from '../models/card.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AddCardService {

  constructor(private http:HttpClient) {}

  private cardUrl = 'http://localhost:8080/card-service/card/addcard/';

  public getCard() {
    var myObj = JSON.parse(localStorage.getItem("currentUserCard"));
    var name = myObj["userName"];
    console.log('AddCardService.getCard triggered from card myObj name is:'+name);
    return this.http.get<Card[]>('http://localhost:8080/card-service/card/getcard/'+name+'/');
  }

  public addCard(card) {
    var user = JSON.parse(localStorage.getItem("currentUser"));
    card.email = user.email;

    return this.http.post<Card>(this.cardUrl, card);
  }

}
