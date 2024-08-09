import { Injectable } from '@angular/core';
export interface RefinanceData {
  field: string;
  current: string;
  proposed: string;
  difference: string;
}

@Injectable({
  providedIn: 'root'
})
export class RefinanceService {

  private refinanceData: RefinanceData[] = [
    { field: 'Loan Amount', current: '$200,000', proposed: '$200,000', difference: '$0' },
    { field: 'Interest Rate', current: '4.5%', proposed: '3.5%', difference: '-1.0%' },
    { field: 'Term', current: '30 years', proposed: '15 years', difference: '-15 years' },
    { field: 'Monthly Payment', current: '$1,013', proposed: '$1,430', difference: '+$417' },
    { field: 'Total Interest', current: '$182,000', proposed: '$80,000', difference: '-$102,000' },
    { field: 'Total Cost', current: '$382,000', proposed: '$280,000', difference: '-$102,000' },
    { field: 'Break-Even Point', current: 'N/A', proposed: '5 years', difference: 'N/A' }
  ];

  constructor() { }

  getRefinanceData(): RefinanceData[] {
    return this.refinanceData;
  }
}
