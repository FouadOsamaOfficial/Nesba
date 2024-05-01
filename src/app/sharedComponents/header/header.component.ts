import { Component, Input } from '@angular/core';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() isLoggedIn: boolean = false;

  constructor(private authService: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
