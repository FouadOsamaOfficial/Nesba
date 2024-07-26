import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-real-estate-market',
  templateUrl: './real-estate-market.component.html',
  styleUrls: ['./real-estate-market.component.css']
})
export class RealEstateMarketComponent {
  constructor(private router:Router){}

  previous(){
    this.router.navigate(['/mortgage-finance']);

  }
}
