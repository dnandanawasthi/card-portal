import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Card } from '../models/card.model';
import { AddCardService } from './addcard.service';

@Component({
  selector: 'app-card',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddCardComponent implements OnInit {

  card: Card = new Card();

  cards: Card[];

  constructor(private router: Router, private addcardService: AddCardService) {
  }

  ngOnInit() {
    console.log("addcard.component getCard......." +this.card.userName)
    /*this.addcardService.getCard()
      .subscribe( data => {
        this.cards = data;
      });*/
  };


  addCard(): void {
    console.log('triggered AddCardComponent.ts.addCard');
    console.log('triggered AddCardComponent.ts.addCard email assigned to card ');
    this.addcardService.addCard(this.card)
        .subscribe( data => {
            console.log('triggered AddCardComponent.ts.addCard add card to localstorage');
            localStorage.setItem('currentUserCard', JSON.stringify(this.card));
            console.log('sending to searchcard...............');
            this.router.navigate(['searchcard']);
        });
  };

}
