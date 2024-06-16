import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mortgage-finance',
  templateUrl: './mortgage-finance.component.html',
  styleUrls: ['./mortgage-finance.component.css']
})
export class MortgageFinanceComponent {
  selectedTable: number = 1;
  constructor(private router:Router ) { }

  showTable(tableNumber: number) {
    this.selectedTable = tableNumber;
  }
  
  previous() {
    this.router.navigate(['./finance-products']);
  }
}
