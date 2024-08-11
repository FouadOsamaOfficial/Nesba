import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router
) {}
toGeustFinanacePro(){
  this.router.navigate(['./guest-finance-products']);

}
toGeustCards(){
  this.router.navigate(['./guest-cards']);

}
toGeustInvestment(){
  this.router.navigate(['./guest-investment']);

}

  signIn() {
    this.router.navigate(['./login']);
}
}
