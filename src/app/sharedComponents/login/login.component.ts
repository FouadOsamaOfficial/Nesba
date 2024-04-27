import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private isLoggedInFlag: boolean = false; // Flag to track user login status

  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private router:Router , private authService: LoginService , private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  signup(): void {
    this.router.navigate(['/sign-up']);
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return; // Do not proceed if the form is invalid
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (this.authService.isValidLogin(username, password)) {
      // Redirect to dashboard or perform other actions upon successful login
      console.log('Login successful');
      this.router.navigate(['/user-dashboard']);
      this.errorMessage = '';
      this.isLoggedInFlag = true;

    } else {
      this.errorMessage = 'Invalid username or password';
      this.isLoggedInFlag = false;

      console.error('Login failed:', this.errorMessage); // Log error message to console for debugging
    }
  }


  // onLogin(){
  //   this.router.navigate(['/user-dashboard']);
    
  // }

    // Method to simulate user login
    // login(): void {
      // Perform login actions such as setting isLoggedInFlag to true
      // this.isLoggedInFlag = true;
    
  
    // Method to simulate user logout
    // logout(): void {
      // Perform logout actions such as setting isLoggedInFlag to false
    //   this.isLoggedInFlag = false;
    // }

}
