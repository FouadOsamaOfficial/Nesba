import { Injectable } from '@angular/core';
 export interface EventData {
  // eventCount?:string;
  title:string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
  thumbnailBackgroundColor: string;
  thumbnailDateDay: string;
  thumbnailDateMonth: string;
}
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  private events: EventData[] = [
    {
      // eventCount:'5',
      title:'new cards',
      date: '17/08/2023',
      location: 'SUADI ARABIA',
      imageUrl: 'assets/images/eventAlrajhi.jpeg',
      description: 'Al Rajhi Bank and Almosafer form a strategic partnership to elevate customer experiences across travel and banking',
      thumbnailBackgroundColor: '#ffa5009e',
      thumbnailDateDay: '17',
      thumbnailDateMonth: 'ago'
    },
    {
      title:'new investments',
      date: '20/09/2023',
      location: 'SUADI ARABIA',
      imageUrl: 'assets/images/landmarkAlrajhi.jpeg',
      description: 'Al Rajhi Bank and Landmark Arabia partner to elevate customer rewards experience',
      thumbnailBackgroundColor: '#00800070',
      thumbnailDateDay: '20',
      thumbnailDateMonth: 'sep'
    },
    {
      title:'cards',
      date: '31/12/2023',
      location: 'SUADI ARABIA',
      imageUrl: 'assets/images/suadideposit.jpeg',
      description: 'Saudi Arabia says it is close to making $5 billion deposit with Turkey',
      thumbnailBackgroundColor: '#ff000070',
      thumbnailDateDay: '31',
      thumbnailDateMonth: 'dec'
    },
    {
      title:'new branch',
      date: '17/03/2024',
      location: 'SUADI ARABIA',
      imageUrl: 'assets/images/suadiWithFeelancers.jpeg',
      description: 'Saudi Social Development Bank pledges $6.4bn to start-up businesses and freelancers',
      thumbnailBackgroundColor: '#2196f3ad',
      thumbnailDateDay: '17',
      thumbnailDateMonth: 'mar'
    },
    {
      title:'mortgage',
      date: '31/02/2024',
      location: 'SUADI ARABIA',
      imageUrl: 'assets/images/SABBNewVisia.jpeg',
      description: 'SABB launches Visa debit card ',
      thumbnailBackgroundColor: '#673ab794',
      thumbnailDateDay: '31',
      thumbnailDateMonth: 'Feb'
    }
  ];

  getEvents(): EventData[] {
    return this.events;
  }
}
