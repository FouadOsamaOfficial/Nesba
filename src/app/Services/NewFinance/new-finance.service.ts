import { Injectable } from '@angular/core';
export interface NewFinanceData {
  category: string;
  amount: number;
  date: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class NewFinanceService {

  constructor() { }
  private NewFinances: NewFinanceData[] = [
    {
      category: 'Salary',
      amount: 5000,
      date: '2024-08-01',
      description: 'Monthly salary payment'
    },
    {
      category: 'Groceries',
      amount: -200,
      date: '2024-08-05',
      description: 'Monthly groceries shopping'
    },
    {
      category: 'Utilities',
      amount: -150,
      date: '2024-08-10',
      description: 'Electricity and water bills'
    },
    {
      category: 'Entertainment',
      amount: -100,
      date: '2024-08-15',
      description: 'Movies and dining out'
    },
    {
      category: 'Investment',
      amount: 300,
      date: '2024-08-20',
      description: 'Dividend from investments'
    }
  ];

  getNewFinanceData(): NewFinanceData[] {
    return this.NewFinances;
  }
}
