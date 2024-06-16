import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance-products',
  templateUrl: './finance-products.component.html',
  styleUrls: ['./finance-products.component.css']
})
export class FinanceProductsComponent {
  constructor( private router:Router){}


  previous(){
    this.router.navigate(['./services']);

  }

  toMortgageFinance(){
    this.router.navigate(['./mortgage-finance']);
  }
  toPersonalFinance(){
    this.router.navigate(['./personal-finance']);
  }
  toAutoLeaseFinance(){
    this.router.navigate(['./auto-lease-finance']);
  }
}
