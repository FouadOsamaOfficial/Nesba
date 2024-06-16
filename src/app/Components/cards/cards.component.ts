import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
constructor(private router:Router){}



  previous() {
    this.router.navigate(['./services']);
  }

  toCredit(){
    this.router.navigate(['./credits']);

  }

  toDebit(){
    this.router.navigate(['./debits']);

  }
}
