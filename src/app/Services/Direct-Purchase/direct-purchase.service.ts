import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface DirectPurchase {
  propertyType: string;
  location: string;
  purchasePrice: string;
  downPayment: string;
  mortgageAmount: string;
  interestRate: string;
  termLength: string;
  monthlyPayment: string;
  notes: string;
  imageUrl:string[];
}
@Injectable({
  providedIn: 'root'
})
export class DirectPurchaseService {

 
  private dummyData: DirectPurchase[] = [
    {
      propertyType: 'House',
      location: 'New York',
      purchasePrice: '$500,000',
      downPayment: '$100,000',
      mortgageAmount: '$400,000',
      interestRate: '4.0%',
      termLength: '30 years',
      monthlyPayment: '$1,910',
      notes: 'Fixed-rate mortgage',
      imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg ','assets/images/villa4.jpeg ']  

    },
    {
      propertyType: 'Land',
      location: 'Los Angeles',
      purchasePrice: '$200,000',
      downPayment: '$40,000',
      mortgageAmount: '$160,000',
      interestRate: '3.5%',
      termLength: '20 years',
      monthlyPayment: '$887',
      notes: 'Adjustable-rate mortgage',
      imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg ','assets/images/villa4.jpeg ']  

    },
    {
      propertyType: 'House',
      location: 'Los Angeles',
      purchasePrice: '$200,000',
      downPayment: '$40,000',
      mortgageAmount: '$160,000',
      interestRate: '3.5%',
      termLength: '20 years',
      monthlyPayment: '$887',
      notes: 'Adjustable-rate mortgage',
      imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg ','assets/images/villa4.jpeg ']  

    },
    {
      propertyType: 'Land',
      location: 'Los Angeles',
      purchasePrice: '$200,000',
      downPayment: '$40,000',
      mortgageAmount: '$160,000',
      interestRate: '3.5%',
      termLength: '20 years',
      monthlyPayment: '$887',
      notes: 'Adjustable-rate mortgage',
      imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg ','assets/images/villa4.jpeg ']  

    },
    {
      propertyType: 'House',
      location: 'Los Angeles',
      purchasePrice: '$200,000',
      downPayment: '$40,000',
      mortgageAmount: '$160,000',
      interestRate: '3.5%',
      termLength: '20 years',
      monthlyPayment: '$887',
      notes: 'Adjustable-rate mortgage',
      imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg ','assets/images/villa4.jpeg ']  

    },
    {
      propertyType: 'Land',
      location: 'Los Angeles',
      purchasePrice: '$200,000',
      downPayment: '$40,000',
      mortgageAmount: '$160,000',
      interestRate: '3.5%',
      termLength: '20 years',
      monthlyPayment: '$887',
      notes: 'Adjustable-rate mortgage',
      imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg' ,'assets/images/villa4.jpeg ']  

    },
    {
      propertyType: 'House',
      location: 'Los Angeles',
      purchasePrice: '$200,000',
      downPayment: '$40,000',
      mortgageAmount: '$160,000',
      interestRate: '3.5%',
      termLength: '20 years',
      monthlyPayment: '$887',
      notes: 'Adjustable-rate mortgage',
      imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg' ,'assets/images/villa4.jpeg ']  

    },
    {
      propertyType: 'Land',
      location: 'Los Angeles',
      purchasePrice: '$200,000',
      downPayment: '$40,000',
      mortgageAmount: '$160,000',
      interestRate: '3.5%',
      termLength: '20 years',
      monthlyPayment: '$887',
      notes: 'Adjustable-rate mortgage',
      imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg ','assets/images/villa4.jpeg ']  

    }
    // Add more dummy data if needed
  ];

  constructor() { }

  getDirectPurchaseData(): Observable<DirectPurchase[]> {
    return of(this.dummyData);
  }
}
