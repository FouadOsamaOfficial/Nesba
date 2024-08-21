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
  imageUrl:string;
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
      apr: '3.50%',
      imageUrl:'assets/images/villa1.webp'

    },
    {
      lender: 'Bank B',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%',
        imageUrl:'assets/images/villa2.jpeg'

    },
    {
      lender: 'Bank c',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%',
        imageUrl:'assets/images/villa3.jpeg'

    },
    {
      lender: 'Bank d',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%',
        imageUrl:'assets/images/villa4.jpeg'

    },
    {
      lender: 'Bank e',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%',
        imageUrl:'assets/images/villa5.jpeg'

    },
    {
      lender: 'Bank f',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%',
        imageUrl:'assets/images/villa6.jpeg'

    },
    {
      lender: 'Bank g',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%',
        imageUrl:'assets/images/villa1.webp'

    },
    {
      lender: 'Bank h',
      loanType: 'Adjustable',
      interestRate: '2.75%',
      monthlyPayment: '$1,150',
      term: '15 years',
      fees: '$1,500',
      apr: '2.90%',
        imageUrl:'assets/images/villa2.jpeg'

    }
    // Add more dummy data if needed
  ];

  constructor() { }

  getMortgageRefinanceData(): Observable<MortgageRefinance[]> {
    return of(this.dummyData);
  }
}
