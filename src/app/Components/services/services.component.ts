import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor( private router:Router){}

  previous(){
    this.router.navigate(['./user-profile']);
  
  }
  toFinanceProducts(){
    this.router.navigate(['./finance-products']);

  }
  toCards(){
    this.router.navigate(['./cards']);
    
  }
  toInvestment(){
    this.router.navigate(['./investment']);
    
  }
}
