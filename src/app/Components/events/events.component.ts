import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/Services/Events/events.service';

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

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})


export class EventsComponent implements OnInit {
  events: EventData[] = [];   
  constructor(private router:Router,private eventsService: EventsService) { }



  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }



  previous() {
    this.router.navigate(['./user-dashboard']);

  }
}
