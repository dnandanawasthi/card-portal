import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Card } from '../models/card.model';
import { GetCardService } from './getcard.service';

@Component({
  selector: 'app-getcard',
  templateUrl: './getcard.component.html',
  styleUrls: ['./getcard.component.css']
})

export class GetcardComponent implements OnInit {

  card: Card;

  constructor(private router: Router, private getcardService: GetCardService) { }

  ngOnInit() {

    var userCardDetail = JSON.parse(localStorage.getItem("currentUserCard"));
    this.card = <Card>userCardDetail;

  }

}
