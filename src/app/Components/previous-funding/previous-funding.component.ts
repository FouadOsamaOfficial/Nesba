import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-funding',
  templateUrl: './previous-funding.component.html',
  styleUrls: ['./previous-funding.component.css']
})
export class PreviousFundingComponent {
  constructor( private router:Router){}
  previous(){
    this.router.navigate(['./funding']);
  }
}
