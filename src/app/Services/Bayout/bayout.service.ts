import { Injectable } from '@angular/core';
export interface BuyoutData {
  transactionDate: string;
  transactionAmount: number;
  buyoutPercentage: number;
  totalBuyout: number;
}
@Injectable({
  providedIn: 'root'
})
export class BayoutService {
  constructor() { }

  private buyouts: BuyoutData[] = [
    {
      transactionDate: '2024-01-15',
      transactionAmount: 10000,
      buyoutPercentage: 2.5,
      totalBuyout: 250
    },
    {
      transactionDate: '2024-02-20',
      transactionAmount: 15000,
      buyoutPercentage: 3.0,
      totalBuyout: 450
    },
    {
      transactionDate: '2024-03-05',
      transactionAmount: 20000,
      buyoutPercentage: 2.8,
      totalBuyout: 560
    }
  ];

  getBuyouts(): BuyoutData[] {
    return this.buyouts;
  }
}
