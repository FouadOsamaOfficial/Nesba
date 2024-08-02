import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CardsList, CardsService } from 'src/app/Services/Cards/cards.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards:CardsList [] = [];
constructor(private router:Router , private cardsListService:CardsService){}

ngOnInit(): void {
  this.cardsListService.getCardsList().subscribe(data => {
    this.cards = data;
    // Assuming you want to display the first two items
    // this.currentFundingData1 = data.length > 0 ? data[0] : null;
    // this.currentFundingData2 = data.length > 1 ? data[1] : null;
  });
}

  previous() {
    this.router.navigate(['./services']);
  }

  toCredit(){
    this.router.navigate(['./credits']);

  }

  toDebit(){
    this.router.navigate(['./debits']);

  }
}
