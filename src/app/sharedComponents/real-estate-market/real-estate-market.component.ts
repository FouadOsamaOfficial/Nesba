import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketReadyUnitsService, Property } from 'src/app/Services/Market-Ready-Unit/market-ready-units.service';

@Component({
  selector: 'app-real-estate-market',
  templateUrl: './real-estate-market.component.html',
  styleUrls: ['./real-estate-market.component.css']
})
export class RealEstateMarketComponent implements OnInit {
  properties: Property[] = []; 

  constructor(
    private router: Router,
    private marketReadyUnitsService: MarketReadyUnitsService
  ) {}

  ngOnInit(): void {
    this.properties = this.marketReadyUnitsService.getProperties();
  }

  viewProperty(property: Property): void {
    // Navigate to SlectedUniteComponent with the property title
    this.router.navigate(['/slected-unite', property.title]); 
  }

  previous(): void {
    this.router.navigate(['/mortgage-finance']);
  }
}
