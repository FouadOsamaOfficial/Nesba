import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface EquityRelease {
  provider: string;
  typeOfPlan: string;
  interestRate: string;
  initialAmountReleased: string;
  estimatedValueAfter10Years: string;
  monthlyPayment: string;
  notes: string;
}
@Injectable({
  providedIn: 'root'
})
export class EquityReleaseService {


  private dummyData: EquityRelease[] = [
    {
      provider: 'Provider A',
      typeOfPlan: 'Lifetime Mortgage',
      interestRate: '3.5%',
      initialAmountReleased: '$50,000',
      estimatedValueAfter10Years: '$80,000',
      monthlyPayment: 'None (interest rolled up)',
      notes: 'No early repayment charges'
    },
    {
      provider: 'Provider B',
      typeOfPlan: 'Home Reversion Plan',
      interestRate: '4.0%',
      initialAmountReleased: '$40,000',
      estimatedValueAfter10Years: '$70,000',
      monthlyPayment: 'None',
      notes: 'Option to buy back property'
    },
    {
      provider: 'Provider C',
      typeOfPlan: 'Home Reversion Plan',
      interestRate: '4.0%',
      initialAmountReleased: '$40,000',
      estimatedValueAfter10Years: '$70,000',
      monthlyPayment: 'None',
      notes: 'Option to buy back property'
    },
    {
      provider: 'Provider D',
      typeOfPlan: 'Home Reversion Plan',
      interestRate: '4.0%',
      initialAmountReleased: '$40,000',
      estimatedValueAfter10Years: '$70,000',
      monthlyPayment: 'None',
      notes: 'Option to buy back property'
    },
    {
      provider: 'Provider E',
      typeOfPlan: 'Home Reversion Plan',
      interestRate: '4.0%',
      initialAmountReleased: '$40,000',
      estimatedValueAfter10Years: '$70,000',
      monthlyPayment: 'None',
      notes: 'Option to buy back property'
    },
    {
      provider: 'Provider F',
      typeOfPlan: 'Home Reversion Plan',
      interestRate: '4.0%',
      initialAmountReleased: '$40,000',
      estimatedValueAfter10Years: '$70,000',
      monthlyPayment: 'None',
      notes: 'Option to buy back property'
    },
    {
      provider: 'Provider G',
      typeOfPlan: 'Home Reversion Plan',
      interestRate: '4.0%',
      initialAmountReleased: '$40,000',
      estimatedValueAfter10Years: '$70,000',
      monthlyPayment: 'None',
      notes: 'Option to buy back property'
    },
    {
      provider: 'Provider H',
      typeOfPlan: 'Home Reversion Plan',
      interestRate: '4.0%',
      initialAmountReleased: '$40,000',
      estimatedValueAfter10Years: '$70,000',
      monthlyPayment: 'None',
      notes: 'Option to buy back property'
    },
    {
      provider: 'Provider U',
      typeOfPlan: 'Home Reversion Plan',
      interestRate: '4.0%',
      initialAmountReleased: '$40,000',
      estimatedValueAfter10Years: '$70,000',
      monthlyPayment: 'None',
      notes: 'Option to buy back property'
    },
    {
      provider: 'Provider x',
      typeOfPlan: 'Home Reversion Plan',
      interestRate: '4.0%',
      initialAmountReleased: '$40,000',
      estimatedValueAfter10Years: '$70,000',
      monthlyPayment: 'None',
      notes: 'Option to buy back property'
    },
    // Add more dummy data if needed
  ];

  constructor() { }

  getEquityReleaseData(): Observable<EquityRelease[]> {
    return of(this.dummyData);
  }
}
