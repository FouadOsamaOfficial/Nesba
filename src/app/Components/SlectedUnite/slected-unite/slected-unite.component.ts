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

  constructor(
    private route: ActivatedRoute,
    private marketReadyUnitsService: MarketReadyUnitsService, 
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const title = params.get('title'); 
      if (title) {
        this.property = this.marketReadyUnitsService.getProperties().find(p => p.title === title);
      }
    });
  }

  contactProvider(){
    this.router.navigate(['./service-provider']);

  }
}
