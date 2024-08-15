import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DirectPurchase, DirectPurchaseService } from 'src/app/Services/Direct-Purchase/direct-purchase.service';
import { EquityRelease, EquityReleaseService } from 'src/app/Services/Equity-Release/equity-release.service';
import { MOHProgramService, MohProgram } from 'src/app/Services/MOH-Program/moh-program.service';
import { MortgageRefinance, MortgageRefinanceService } from 'src/app/Services/Mortgage-Refinance/mortgage-refinance.service';
import { UnitsModalService } from 'src/app/Services/units-modal/units-modal.service';

@Component({
  selector: 'app-mortgage-finance',
  templateUrl: './mortgage-finance.component.html',
  styleUrls: ['./mortgage-finance.component.css']
})
export class MortgageFinanceComponent {
  selectedTable: number = 1;
  isModalOpen = false;

  mortgageData: MortgageRefinance[] = [];
  equityData: EquityRelease[] = [];

  purchaseData: DirectPurchase[] = [];

//---------------------- MOH Program
mohPrograms: MohProgram[] = [];
selectedProgram: MohProgram | null = null;
selectedIndex: number | null = null;

  ngOnInit(): void {
    this.mohPrograms = this.mohService.getMohPrograms();

    this.directPurchaseService.getDirectPurchaseData().subscribe(data => {
      this.purchaseData = data;
    });
    this.equityReleaseService.getEquityReleaseData().subscribe(data => {
      this.equityData = data;
    });
    this.refinanceService.getMortgageRefinanceData().subscribe(data => {
      this.mortgageData = data;
    });
  }
  constructor(private mohService:MOHProgramService,private directPurchaseService: DirectPurchaseService, private equityReleaseService: EquityReleaseService, private router: Router, private modalService: UnitsModalService, private refinanceService: MortgageRefinanceService) { }


  // Method to handle selection of a program
  selectProgram(index: number): void {
    this.selectedIndex = index;
    this.selectedProgram = this.mohPrograms[index];
    this.openModal();
  }

  // Method to handle radio button change
  onSelfConstructionChange(event: Event): void {
    if (this.selectedIndex !== null) {
      const input = event.target as HTMLInputElement;
      this.selectedProgram!.selfConstruction = input.value === 'Number 2';
      this.mohService.updateMohProgram(this.selectedIndex, this.selectedProgram!);
    }
  }


  openRealEastateMarket() {
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
