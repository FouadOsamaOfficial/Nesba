import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funding-tracker',
  templateUrl: './funding-tracker.component.html',
  styleUrls: ['./funding-tracker.component.css']
})
export class FundingTrackerComponent {

  constructor( private router:Router){}


  previous(){
    this.router.navigate(['./funding']);

  }
}
