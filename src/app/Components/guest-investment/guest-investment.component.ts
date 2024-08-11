import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-investment',
  templateUrl: './guest-investment.component.html',
  styleUrls: ['./guest-investment.component.css']
})
export class GuestInvestmentComponent {
  constructor(private router:Router){

  }
  previous(){
    this.router.navigate(['./home']);
  
  }
  
  signup(): void {
    this.router.navigate(['/sign-up']);
  }
}
