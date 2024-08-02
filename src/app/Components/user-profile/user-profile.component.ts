import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserData, UserDataService } from 'src/app/Services/User-Data/user-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  // userForm: FormGroup;
  // viewMode: boolean = true;
  // selectedFile: File | undefined;
  // avatarUrl: string = 'https://lh3.googleusercontent.com/-W2XryVdi-lA/U6tSAh3SsbI/AAAAAAAAFGY/ZHJiUEcR_Zs/w480-h480/avatar%2Bmaterial%2Bdesign.png';
  // @Output() logoutEvent = new EventEmitter<void>();
  // userData: UserData | undefined;
  userData: UserData = {
    fullName: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    birthDate: '',
    nationality: '',
    nationalID: '',
    maritalStatus: '',
    familyMembers: 0,
    address: '',
    city: '',
    country: '',
    postalCode: '',
    phoneNumber: '',
    landlineNumber: '',
    workSector: '',
    employer: '',
    startedFrom: '',
    basicSalary: '',
    allowance: '',
    bankName: '',
    foodAndBeverages: '',
    housing: '',
    utilities: '',
    healthCareAndInsurance: '',
    transport: '',
    communications: '',
    educationFees: '',
    homeServants: '',
    feesOnExpats: '',
    otherFutureExpenses: '',
    otherCurrentExpenses: '',
    houseOwnership: '',
    insurance: '',
    about:'',
    userImg:''
  };
  constructor(private fb: FormBuilder , private router:Router , private userDataService: UserDataService) {

  }

  ngOnInit(): void {
    this.userDataService.getUserData().subscribe(data => {
      if (data) {
        this.userData = data;
      }
    });
  }

  logout() {
    // this.logoutEvent.emit();
    this.router.navigate(['./home']);

  }
  previous() {
    this.router.navigate(['./user-dashboard']);

}
// signOut(){
//   this.router.navigate(['./home']);

// }
saveChanges(){

}
cancelChanges(){

}

}