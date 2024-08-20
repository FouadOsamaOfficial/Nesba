import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketReadyUnitsService, Property } from 'src/app/Services/Market-Ready-Unit/market-ready-units.service';

@Component({
  selector: 'app-slected-unite',
  templateUrl: './slected-unite.component.html',
  styleUrls: ['./slected-unite.component.css']
})
export class SlectedUniteComponent implements OnInit {
  property: Property | undefined;
  properties: Property[] = [];

  constructor(
    private route: ActivatedRoute,
    private marketReadyUnitsService: MarketReadyUnitsService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.properties = this.marketReadyUnitsService.getProperties(); // Fetch all properties

    this.route.paramMap.subscribe(params => {
      const title = params.get('title'); 
      if (title) {
        this.property = this.properties.find(p => p.title === title);
      }
    });

    document.querySelectorAll('input[type=radio]').forEach(input => {
      (input as HTMLInputElement).addEventListener('change', () => {
        document.body.classList.toggle('blue');
      });
    });
  }

  getRoomDetails(property: Property): any[] {
    return property.roomDetails || [];
  }

  contactProvider() {
    this.router.navigate(['./service-provider']);
  }

  previous() {
    this.router.navigate(['./real-estate-market']);

  }
}
