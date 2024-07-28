import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn = false;

  onLogin(event: boolean) {
    this.isLoggedIn = event;
  }

  onLogout() {
    this.isLoggedIn = false;
  }

  // title = 'Nesba';
  // isLoggedIn: boolean = false; // Initially, the user is not logged in

  // Method to simulate user login
  // login() {
  //   this.isLoggedIn = true;
  // }

  // Method to simulate user logout
  // logout() {
  //   this.isLoggedIn = false;
  // }
}
