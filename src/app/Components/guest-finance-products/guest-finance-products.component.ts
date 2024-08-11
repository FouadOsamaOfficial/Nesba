import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-finance-products',
  templateUrl: './guest-finance-products.component.html',
  styleUrls: ['./guest-finance-products.component.css']
})
export class GuestFinanceProductsComponent {
  constructor(private router:Router){

  }
  previous(){
    this.router.navigate(['./home']);
  
  }
  
  signup(): void {
    this.router.navigate(['/sign-up']);
  }
}
