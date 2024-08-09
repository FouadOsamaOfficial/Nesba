import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BayoutService, BuyoutData } from 'src/app/Services/Bayout/bayout.service';
import { NewFinanceData, NewFinanceService } from 'src/app/Services/NewFinance/new-finance.service';
import { RefinanceData, RefinanceService } from 'src/app/Services/Refinance/refinance.service';

@Component({
  selector: 'app-personal-finance',
  templateUrl: './personal-finance.component.html',
  styleUrls: ['./personal-finance.component.css']
})
export class PersonalFinanceComponent {
  selectedTable: number = 1;
  refinanceData: RefinanceData[] = [];
  newFinanceData: NewFinanceData[] = [];
  buyouts: BuyoutData[] = [];

  constructor(private buyoutService: BayoutService ,private router:Router,private refinanceService: RefinanceService , private newFinanceService: NewFinanceService ) { }



  ngOnInit(): void {
    this.buyouts = this.buyoutService.getBuyouts();

    this.newFinanceData = this.newFinanceService.getNewFinanceData();

    this.refinanceData = this.refinanceService.getRefinanceData();
  }


  showTable(tableNumber: number) {
    this.selectedTable = tableNumber;
  }
  
  previous() {
    this.router.navigate(['./finance-products']);
  }
}
