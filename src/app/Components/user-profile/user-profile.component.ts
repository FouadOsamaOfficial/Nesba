import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent{
  // userForm: FormGroup;
  viewMode: boolean = true;
  selectedFile: File | undefined;
  avatarUrl: string = 'https://lh3.googleusercontent.com/-W2XryVdi-lA/U6tSAh3SsbI/AAAAAAAAFGY/ZHJiUEcR_Zs/w480-h480/avatar%2Bmaterial%2Bdesign.png';
  @Output() logoutEvent = new EventEmitter<void>();

  constructor(private fb: FormBuilder , private router:Router) {

  }

  logout() {
    this.logoutEvent.emit();
  }
  previous() {
    this.router.navigate(['./user-dashboard']);

}
// signOut(){
//   this.router.navigate(['./home']);

// }
}