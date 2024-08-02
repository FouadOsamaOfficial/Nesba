import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FundingData, FundingTrackerService } from 'src/app/Services/Funding-Tracker/funding-tracker.service';

@Component({
  selector: 'app-funding-tracker',
  templateUrl: './funding-tracker.component.html',
  styleUrls: ['./funding-tracker.component.css']
})
export class FundingTrackerComponent {
  currentFundingData1: FundingData | null = null;
  currentFundingData2: FundingData | null = null;
    FundingData: FundingData[] = [];


  constructor( private router:Router ,private fundingTrackerService: FundingTrackerService){}

  ngOnInit(): void {
    this.fundingTrackerService.getFundingList().subscribe(data => {
      this.FundingData = data;
      // Assuming you want to display the first two items
      this.currentFundingData1 = data.length > 0 ? data[0] : null;
      this.currentFundingData2 = data.length > 1 ? data[1] : null;
    });
  }
  previous(){
    this.router.navigate(['./funding']);

  }
}
