import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService
  ) { }
  // backSignin(){
  //   this.router.navigate(['/login'])
  // }
  // readTerms(){
  //   this.router.navigate(['/terms']);
  // }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      goverId: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      termsAndConditions: [false, Validators.requiredTrue]
    });
  }

  // onSubmit(): void {
  //   if (this.signupForm.valid) {
  //     console.log('Form data saved:', this.signupForm.value);

  //     this.router.navigateByUrl('/user-dashboard');
  //   } else {
  //     console.error('Invalid form submission. Form is not valid.');
  //   }
  // }

  onSubmit(): void {
    if (this.signupForm.valid) {
      // Save the form data
      const { username, password } = this.signupForm.value;
      // Call the addCredentials method of the login service
      this.loginService.addCredentials(username, password);
      // Navigate to the user dashboard
      this.router.navigateByUrl('/user-dashboard');
    } else {
      // Handle invalid form submission
    }
  }


  // Method to navigate back to sign in page
  backSignin(): void {
    // Logic to navigate back to sign in page
  }

  // Method to read terms and conditions
  readTerms(): void {
    // Logic to read terms and conditions
  }


}
