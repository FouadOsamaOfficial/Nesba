import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  userForm: FormGroup;
  viewMode: boolean = true;
  selectedFile: File | undefined;
  avatarUrl: string = 'https://lh3.googleusercontent.com/-W2XryVdi-lA/U6tSAh3SsbI/AAAAAAAAFGY/ZHJiUEcR_Zs/w480-h480/avatar%2Bmaterial%2Bdesign.png';

  constructor(private fb: FormBuilder , private router:Router) {
    this.userForm = this.fb.group({
      name: ['Adam Luxor', Validators.required],
      title: ['VP of User Experience', Validators.required],
      department: ['Product', Validators.required],
      location: ['Atlanta', Validators.required],
      company: ['BetterCloud', Validators.required],
      manager: ['Emily Morgan', Validators.required],
      workPhone: ['404-555-1212', Validators.required],
      mobilePhone: ['404-555-6789'],
      alias: ['adam.luxor@companyname.com', Validators.email],
      otherEmail: ['adaml@someothercompany.com', Validators.email]
    });
  }

  ngOnInit(): void {}

  switchMode(): void {
    this.viewMode = !this.viewMode;
  }
  
  editAvatar(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Display the selected image in the UI
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result;
      };
      reader.readAsDataURL(file);

      console.log('Editing avatar');
    }
  }

  clearAvatar() {
    this.avatarUrl = 'https://lh3.googleusercontent.com/-W2XryVdi-lA/U6tSAh3SsbI/AAAAAAAAFGY/ZHJiUEcR_Zs/w480-h480/avatar%2Bmaterial%2Bdesign.png';
    this.selectedFile = undefined;
  }
  saveChanges(): void {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
      this.viewMode = true;
    }
  }
  previous() {
    this.router.navigate(['./user-dashboard']);

  }
}
