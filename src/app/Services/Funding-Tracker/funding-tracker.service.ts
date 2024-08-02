import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface FundingData {
  id: number;
  month: string;
  year: number;
  progressWidth: string; 
  totalFunds: number;
  loanType: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class FundingTrackerService {
  private fundingData: FundingData[] = [
    {
      id:1,
      month: 'February',
      year: 2024,
      progressWidth: '70%',
      totalFunds: 10000,
      loanType: 'Mortgage Loan',
      status: 'Accepted'
    },
    {
      id:2,
      month: 'Decamber',
      year: 2023,
      progressWidth: '40%',
      totalFunds: 15000,
      loanType: 'Mortgage Loan',
      status: 'Declined'
    },
    {
      id:3,
      month: 'March',
      year: 2022,
      progressWidth: '90%',
      totalFunds: 19000,
      loanType: 'Mortgage Loan',
      status: 'Declined'
    },
  ];
  getFundingList(): Observable<FundingData[]> {
    return of(this.fundingData);
  }

  constructor() { }
}
