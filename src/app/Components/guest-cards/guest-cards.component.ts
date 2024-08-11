import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-cards',
  templateUrl: './guest-cards.component.html',
  styleUrls: ['./guest-cards.component.css']
})
export class GuestCardsComponent {
constructor(private router:Router){

}
previous(){
  this.router.navigate(['./home']);

}

signup(): void {
  this.router.navigate(['/sign-up']);
}
}
