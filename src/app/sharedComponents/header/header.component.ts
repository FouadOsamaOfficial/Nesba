import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false; // Variable to track user authentication status

  constructor(private authService: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn(); // Check if user is logged in
  }
}
