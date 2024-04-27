import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedInFlag: boolean = false; // Flag to track user login status

  private validCredentials = [
    { username: 'fouad', password: '12345' },
    { username: 'abdelaziz', password: '12345' },
    { username: 'omar', password: '12345' }
  ];

  constructor() { }
  isValidLogin(inputUsername: string, inputPassword: string): boolean {
    // Check if any credentials match the input username and password
    return this.validCredentials.some(cred =>
      cred.username === inputUsername && cred.password === inputPassword
    );
  }

  isLoggedIn(): boolean {
    // Implement your authentication logic here
    // For example, you might check if the user's token exists or if the user is authenticated in some other way
    return this.isLoggedInFlag; // Return the value of the isLoggedInFlag
  }

    // Method to simulate user login
    login(): void {
      // Perform login actions such as setting isLoggedInFlag to true
      this.isLoggedInFlag = true;
    }
  
    // Method to simulate user logout
    logout(): void {
      // Perform logout actions such as setting isLoggedInFlag to false
      this.isLoggedInFlag = false;
    }
}