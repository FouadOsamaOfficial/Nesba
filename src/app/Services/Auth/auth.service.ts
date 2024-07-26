import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  private currentUrl = new BehaviorSubject<string>(this.router.url);

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.url);
      }
    });
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('userToken');
  }

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn;
  }

  isLoginOrSignupPage(): boolean {
    const url = this.currentUrl.value;
    return url === '/login' || url === '/sign-up';
  }

  login() {
    // Logic for logging in
    localStorage.setItem('userToken', 'token'); // Example token storage
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('userToken');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
