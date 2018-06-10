import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Card } from '../models/card.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GetCardService {

  constructor(private http:HttpClient) {}

  private cardUrl = 'http://localhost:8080/card-service/card/getcard/';

  public getCard() {
    var userCardDetail = JSON.parse(localStorage.getItem("currentUserCard"));
    return this.http.get<Card>('http://localhost:8080/card-service/card/getcard/'+userCardDetail.email+'/');
  }


}
