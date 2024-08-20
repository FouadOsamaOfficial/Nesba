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
  roomDetails?: RoomDetail[];  // Optional field for room-specific details
}

export interface RoomDetail {
  imageUrl:string;
  title: string;
  subtitle: string;
  area: string;
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
      forSale: true,
      roomDetails: [
        {imageUrl:'assets/images/room1.jpeg', title: 'BEDROOM 1', subtitle: 'MASTER', area: '500 SQ FT' },
        {imageUrl:'assets/images/room2.jpeg', title: 'BEDROOM 2', subtitle: 'GUEST ROOM', area: '300 SQ FT' },
        {imageUrl:'assets/images/room3.jpeg', title: 'BEDROOM 3', subtitle: 'KIDS ROOM', area: '400 SQ FT' },
        {imageUrl:'assets/images/bathroom1.jpeg', title: 'BATHROOM 1', subtitle: 'MASTER BATHROOM', area: '200 SQ FT' },
        {imageUrl:'assets/images/bathroom2.jpeg', title: 'BATHROOM 2', subtitle: 'GUEST BATHROOM', area: '100 SQ FT' },
        {imageUrl:'assets/images/bathroom3.jpeg', title: 'BATHROOM 3', subtitle: 'KIDS BATHROOM', area: '200 SQ FT' }
      ]
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
      forSale: true,
      roomDetails: [
        {imageUrl:'assets/images/room4.jpeg', title: 'BEDROOM 1', subtitle: 'MASTER', area: '450 SQ FT' },
        {imageUrl:'assets/images/room5.jpeg', title: 'BEDROOM 2', subtitle: 'GUEST ROOM', area: '350 SQ FT' },
        {imageUrl:'assets/images/room6.jpeg', title: 'BEDROOM 3', subtitle: 'KIDS ROOM', area: '400 SQ FT' },
        {imageUrl:'assets/images/bathroom4.jpeg', title: 'BATHROOM 1', subtitle: 'MASTER BATHROOM', area: '200 SQ FT' },
        {imageUrl:'assets/images/bathroom5.jpeg', title: 'BATHROOM 2', subtitle: 'GUEST BATHROOM', area: '150 SQ FT' },
        { imageUrl:'assets/images/bathroom6.jpeg',title: 'BATHROOM 3', subtitle: 'KIDS BATHROOM', area: '180 SQ FT' }
      ]
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
      forSale: true,
      roomDetails: [
        {imageUrl:'assets/images/room7.jpeg', title: 'BEDROOM 1', subtitle: 'MASTER', area: '400 SQ FT' },
        {imageUrl:'assets/images/room8.jpeg', title: 'BEDROOM 2', subtitle: 'GUEST ROOM', area: '350 SQ FT' },
        {imageUrl:'assets/images/room9.jpeg', title: 'BEDROOM 3', subtitle: 'KIDS ROOM', area: '350 SQ FT' },
        {imageUrl:'assets/images/bathroom7.jpeg', title: 'BATHROOM 1', subtitle: 'MASTER BATHROOM', area: '150 SQ FT' },
        {imageUrl:'assets/images/bathroom8.jpeg', title: 'BATHROOM 2', subtitle: 'GUEST BATHROOM', area: '100 SQ FT' },
      ]
    }
  ];

  getProperties(): Property[] {
    return this.properties;
  }
}
