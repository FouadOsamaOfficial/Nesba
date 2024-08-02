import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FundedData, FundedService } from 'src/app/Services/Funded/funded.service';

@Component({
  selector: 'app-previous-funding',
  templateUrl: './previous-funding.component.html',
  styleUrls: ['./previous-funding.component.css']
})
export class PreviousFundingComponent {
  currentFundedData: FundedData | null = null;
    FundedData: FundedData[] = [];

  constructor( private router:Router , private fundedDataService:FundedService){}

  ngOnInit(): void {
    this.fundedDataService.getFundingList().subscribe(data => {
      this.FundedData = data;
      // Assuming you want to display the first two items
      this.currentFundedData = data.length > 0 ? data[0] : null;
    });
  }
  previous(){
    this.router.navigate(['./funding']);
  }
  toNewFinancing(){
    this.router.navigate(['./services']);

  }
}
