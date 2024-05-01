import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nesba';
  isLoggedIn: boolean = false; // Initially, the user is not logged in

  // Method to simulate user login
  login() {
    this.isLoggedIn = true;
  }

  // Method to simulate user logout
  logout() {
    this.isLoggedIn = false;
  }
}
