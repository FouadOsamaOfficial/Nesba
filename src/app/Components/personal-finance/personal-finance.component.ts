import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-finance',
  templateUrl: './personal-finance.component.html',
  styleUrls: ['./personal-finance.component.css']
})
export class PersonalFinanceComponent {
  selectedTable: number = 0;
  constructor(private router:Router ) { }

  showTable(tableNumber: number) {
    this.selectedTable = tableNumber;
  }
  
  previous() {
    this.router.navigate(['./finance-products']);
  }
}
