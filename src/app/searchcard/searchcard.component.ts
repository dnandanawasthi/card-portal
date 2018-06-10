import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Card } from '../models/card.model';
import { SearchcardService } from './searchcard.service';

@Component({
  selector: 'app-searchcard',
  templateUrl: './searchcard.component.html',
  styleUrls: ['./searchcard.component.css']
})
export class SearchcardComponent implements OnInit {

  card: Card;

  cardNumber: string;
  constructor(private router: Router, private searchcardService: SearchcardService) { }

  ngOnInit() {
  }

  searchCard(): void {
      this.searchcardService.searchCard()
        .subscribe( data => {
          this.card = data;
          if(this.card == null) {
              alert("No Card found ");
          } else {
              this.router.navigate(['getcard']);
          }
    });
  };
}
