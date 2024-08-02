import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface CardsList {
  id: number;
  cardType: string;
  receiptTime: string;
  expirationTime: string; 
}
@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cardsList: CardsList[] = [
    {
      id:1,
      cardType: 'Debit',
      receiptTime: '06/2017',
      expirationTime: '06/2024',
    },
    {
      id:2,
      cardType: 'Debit',
      receiptTime: '02/2016',
      expirationTime: '02/2023'
    },
    {
      id:3,
      cardType: 'Debit',
      receiptTime: '07/2018',
      expirationTime: '07/2025'
    },
  ];
  getCardsList(): Observable<CardsList[]> {
    return of(this.cardsList);
  }
  constructor() { }
}
