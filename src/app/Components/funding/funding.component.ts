import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.css']
})
export class FundingComponent {
  constructor(private router:Router){}



  previousFunding(){
    this.router.navigate(['./previous-funding']);

  }
fundingTracker(){
  this.router.navigate(['./funding-tracker ']);

}

previous(){
  this.router.navigate(['./user-profile']);

}
}
