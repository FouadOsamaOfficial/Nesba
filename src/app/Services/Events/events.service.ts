import { Injectable } from '@angular/core';
 export interface EventData {
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
      title:'new cards',
      date: '17/08/2023',
      location: 'NEW YORK',
      imageUrl: 'https://images.pexels.com/photos/1230397/pexels-photo-1230397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Cheers and Grooves in the Heart of New York!',
      thumbnailBackgroundColor: '#ffa5009e',
      thumbnailDateDay: '17',
      thumbnailDateMonth: 'ago'
    },
    {
      title:'new investments',
      date: '20/09/2023',
      location: 'ROME',
      imageUrl: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'CSips and Sway: Where Rome Dances the Night Away!',
      thumbnailBackgroundColor: '#00800070',
      thumbnailDateDay: '20',
      thumbnailDateMonth: 'sep'
    },
    {
      title:'cards',
      date: '31/12/2023',
      location: 'PARIS',
      imageUrl: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Countdown to Joy: New Year\'s Eve Bash in Paris!',
      thumbnailBackgroundColor: '#ff000070',
      thumbnailDateDay: '31',
      thumbnailDateMonth: 'dec'
    },
    {
      title:'new branch',
      date: '17/03/2024',
      location: 'DUBLIN',
      imageUrl: 'https://images.pexels.com/photos/1441460/pexels-photo-1441460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Luck and Laughter: Embrace the Spirit of St. Patrick\'s Day!',
      thumbnailBackgroundColor: '#2196f3ad',
      thumbnailDateDay: '17',
      thumbnailDateMonth: 'mar'
    },
    {
      title:'mortgage',
      date: '31/02/2024',
      location: 'WORLD',
      imageUrl: 'https://images.pexels.com/photos/813787/pexels-photo-813787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Party Bad!',
      thumbnailBackgroundColor: '#673ab794',
      thumbnailDateDay: '31',
      thumbnailDateMonth: 'Feb'
    }
  ];

  getEvents(): EventData[] {
    return this.events;
  }
}
