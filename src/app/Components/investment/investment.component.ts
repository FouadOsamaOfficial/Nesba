import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent {
  constructor( private router:Router){}


  previous(){
    this.router.navigate(['./services']);

  }
  toCounter(){
    this.router.navigate(['./coming-soon']);

  }
}
