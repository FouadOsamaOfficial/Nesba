import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UnitsModalService } from 'src/app/Services/units-modal/units-modal.service';

@Component({
  selector: 'app-mortgage-finance',
  templateUrl: './mortgage-finance.component.html',
  styleUrls: ['./mortgage-finance.component.css']
})
export class MortgageFinanceComponent {
  selectedTable: number = 1;
  isModalOpen = false;


  constructor(private router:Router ,private modalService :UnitsModalService ) { }

  openRealEastateMarket(){
    this.router.navigate(['./real-estate-market']);

  }

  showTable(tableNumber: number) {
    this.selectedTable = tableNumber;
  }
  
  previous() {
    this.router.navigate(['./finance-products']);
  }

    openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  showModal() {
    const data = {
      title: 'Modal Title',
      description: 'This is the description for the modal.'
    };
    this.modalService.openModal(data);
  }
}
