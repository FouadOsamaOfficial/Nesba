import { Injectable } from '@angular/core';

export interface Property {
  imageUrl: string;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  price: string;
  forSale: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MarketReadyUnitsService {
  properties: Property[] = [
    {
      imageUrl: 'assets/images/off plan market /jeddah.jpeg',
      title: 'Villa In Jeddah',
      description: 'Enchanting three bedrooms, three bath home with spacious one bedroom, one bath...',
      bedrooms: 3,
      bathrooms: 3,
      area: 4300,
      areaUnit: 'Sq Ft',
      price: '$540,000',
      forSale: true
    },
    {
      imageUrl: 'assets/images/off plan market /riyadhVilla.webp',
      title: 'Villa In Riyadh',
      description: 'Enjoy serenity of Deering Bay whole day from this spectacular North and...',
      bedrooms: 3,
      bathrooms: 3.5,
      area: 3500,
      areaUnit: 'Sq Ft',
      price: '$825,000',
      forSale: true
    },
    {
      imageUrl: 'assets/images/off plan market /dammamVilla.jpeg',
      title: 'Villa In Dammam',
      description: 'The very best waterfront location in Tahrir square and beside many cool places',
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      areaUnit: 'Sq Ft',
      price: '$410,000',
      forSale: true
    }
  ];

  getProperties(): Property[] {
    return this.properties;
  }
}
