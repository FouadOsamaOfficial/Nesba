import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent {
  constructor(private router:Router){}

  previous() {
    this.router.navigate(['./cards']);

  }

}
