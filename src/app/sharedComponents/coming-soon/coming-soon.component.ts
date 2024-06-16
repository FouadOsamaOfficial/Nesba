import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit, AfterViewInit  {

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  intervalId: number | undefined;

  constructor(private el: ElementRef , private router:Router) { }

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    this.initializeCountdown();
  }

  previous(){
    this.router.navigate(['./investment']);

  }
  initializeCountdown(): void {
    const countdownDate = new Date('2025-01-10T00:00:00').getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        if (this.intervalId !== undefined) {
          clearInterval(this.intervalId);
        }
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
    }, 1000);
  }


}


