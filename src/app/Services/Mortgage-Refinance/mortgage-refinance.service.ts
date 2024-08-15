import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface MortgageRefinance {
  lender: string;
  loanType: string;
  interestRate: string;
  monthlyPayment: string;
  term: string;
  fees: string;
  apr: string;
}

@Injectable({
  providedIn: 'root'
})
export class MortgageRefinanceService {

  private dummyData: MortgageRefinance[] = [
    {
      lender: 'Bank A',
      loanType: 'Fixed',
      interestRate: '3.25%',
      monthlyPayment: '$1,200',
      term: '30 years',
      fees: '$2,000',
      apr: '3.50%'
    },
    {
      lender: 'Bank B',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%'
    },
    {
      lender: 'Bank c',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%'
    },
    {
      lender: 'Bank d',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%'
    },
    {
      lender: 'Bank e',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%'
    },
    {
      lender: 'Bank f',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%'
    },
    {
      lender: 'Bank g',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%'
    },
    {
      lender: 'Bank h',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%'
    }
    // Add more dummy data if needed
  ];

  constructor() { }

  getMortgageRefinanceData(): Observable<MortgageRefinance[]> {
    return of(this.dummyData);
  }
}
