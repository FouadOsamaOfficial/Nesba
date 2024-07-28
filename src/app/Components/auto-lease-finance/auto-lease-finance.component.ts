import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';



// interface Preference {
//   label: string;
//   proc: number;
//   active: boolean;
// }


@Component({
  selector: 'app-auto-lease-finance',
  templateUrl: './auto-lease-finance.component.html',
  styleUrls: ['./auto-lease-finance.component.css']
})
export class AutoLeaseFinanceComponent implements OnInit {

  loanForm: FormGroup;
  monthlyPayment: number = 0;
  numberOfPayments: number = 0;
  totalPayment: number = 0;
  totalInterest: number = 0;

  loanAmount: number = 200000;
  interestRate: number = 3.5;
  loanTerm: number = 25;

  loanOptions: Options = {
    floor: 100,
    ceil: 500000,
    getPointerColor: (): string => '#ef9c2d',
    getSelectionBarColor: (): string => '#093A7C'
  };
  rateOptions: Options = {
    floor: 0,
    ceil: 12,
    step: 0.01,
    getPointerColor: (): string => '#ef9c2d',
    getSelectionBarColor: (): string => '#093A7C'
  };
  termOptions: Options = {
    floor: 1,
    ceil: 30,
    getPointerColor: (): string => '#ef9c2d',
    getSelectionBarColor: (): string => '#093A7C'
  };

  constructor(private fb: FormBuilder , private router:Router) {
    this.loanForm = this.fb.group({
      loanAmount: [this.loanAmount],
      interestRate: [this.interestRate],
      loanTerm: [this.loanTerm]
    });

    this.calculateLoan();
  }

  ngOnInit(): void {
    this.loanForm.valueChanges.subscribe(() => {
      this.calculateLoan();
    });
  }

  calculateLoan() {
    const P = this.loanForm.get('loanAmount')?.value || 0;
    const I = (this.loanForm.get('interestRate')?.value || 0) / 100 / 12;
    const N = (this.loanForm.get('loanTerm')?.value || 0) * 12;

    if (P && I && N) {
      this.monthlyPayment = this.monthlyPaymentCalc(P, N, I);
      this.totalPayment = this.monthlyPayment * N;
      this.totalInterest = this.totalPayment - P;
      this.numberOfPayments = N;
    }
  }

  monthlyPaymentCalc(p: number, n: number, i: number): number {
    return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  }
  // showTable(tableNumber: number) {
  //   this.selectedTable = tableNumber;
  // }
  
  // ngOnInit() {
  //   this.updateValues();
  // }

  // onSliderChange() {
  //   this.updateValues();
  // }

  // onAmountChange(event: any) {
  //   const value = event.target.value;
  //   if (!isNaN(value) && value >= 30000 && value <= 5000000) {
  //     this.amount = parseInt(value);
  //     this.updateValues();
  //   }
  // }

  // selectPreference(preference: Preference) {
  //   this.preferences.forEach(pref => pref.active = false);
  //   preference.active = true;
  //   this.selectedPreference = preference;
  //   this.updateValues();
  // }

  // updateValues() {
  //   const sum = this.amount;
  //   const month = this.sliderValue;
  //   const procent = this.selectedPreference.proc;
  //   const pr = procent / 100 / 12;
  //   const stepen = Math.pow((1 + pr), month);
  //   const plateg = sum * (pr + (pr / (stepen - 1)));
  //   this.calcMonth = Math.round(plateg);
  //   this.calcYear = Math.round(plateg * 12);
  //   this.calcCommon = Math.round(plateg * month);
  // }

  // generateGraph() {
  //   this.calcGraphicVisible = true;
  //   this.graphContent = this.generateGraphContent();
  // }

  // generateGraphContent(): string {
  //   const sum = this.amount;
  //   const n = this.sliderValue;
  //   const procent = this.selectedPreference.proc;
  //   let result = '<div class="divTable"><div class="divTableBody"><div class="divTableRow">';
  //   result += '<div class="divTableCell zag">Payment Date</div>';
  //   result += '<div class="divTableCell zag">Payment Amount</div>';
  //   result += '<div class="divTableCell zag">Loan Principal</div>';
  //   result += '<div class="divTableCell zag">Loan Interest</div>';
  //   result += '<div class="divTableCell zag">Remaining Principal</div></div>';

  //   let ostatok = sum;
  //   let D = new Date();
  //   const pr = procent / 100 / 12;
  //   const stepen = Math.pow((1 + pr), n);

  //   for (let i = 0; i < n; i++) {
  //     const plateg = sum * (pr + (pr / (stepen - 1)));
  //     const procentsPoZaym = (ostatok * pr);
  //     const telodolga = (plateg - procentsPoZaym);
  //     ostatok = ostatok - telodolga;

  //     if (i !== 0) { D = new Date(D.setMonth(D.getMonth() + 1)); }

  //     result += `<div class="divTableRow">
  //       <div class="divTableCell">${this.formatDate(D)}</div>
  //       <div class="divTableCell">${Math.round(plateg)}</div>
  //       <div class="divTableCell">${Math.round(telodolga)}</div>
  //       <div class="divTableCell">${Math.round(procentsPoZaym)}</div>
  //       <div class="divTableCell">${Math.round(ostatok)}</div>
  //     </div>`;
  //   }

  //   return result + '</div></div>';
  // }

  // formatDate(date: Date): string {
  //   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  //   const day = date.getDate();
  //   const month = months[date.getMonth()];
  //   const year = date.getFullYear();
  //   return `${day} ${month} ${year}`;
  // }




  
  previous() {
    this.router.navigate(['./finance-products']);
  }


  
}
