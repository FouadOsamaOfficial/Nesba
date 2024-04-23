import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent {
constructor(private router:Router){}

contactUsFromHWA(){
  this.router.navigate(['./contact']);
  }
}
