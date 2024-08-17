import { string } from '@amcharts/amcharts4/core';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface UserData {
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthDate: string;
  nationality: string;
  nationalID: string;
  maritalStatus: string;
  familyMembers: number;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
  landlineNumber: string;
  workSector: string;
  employer: string;
  startedFrom: string;
  basicSalary: string;
  allowance: string;
  bankName: string;
  foodAndBeverages: string;
  housing: string;
  utilities: string;
  healthCareAndInsurance: string;
  transport: string;
  communications: string;
  educationFees: string;
  homeServants: string;
  feesOnExpats: string;
  otherFutureExpenses: string;
  otherCurrentExpenses: string;
  houseOwnership: string;
  insurance: string;
  about: string;
  userImg:string;
  cashBack:string;
  balanceTtransfer:string;
  apr:string;
 rewards:string;
 travel:string;
 business:string;
 student:string;
 noAnnualFee:string;
 airline:string;
 noForeignFransactionFees:string;
 eventCount:string;
emailsCount:string;
weatherDegree:string;
}
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  private userData: UserData = {
    fullName: 'ABD EL-AZIZ ALHOWIDI',
    firstName: 'ABD EL-AZIZ',
    lastName: 'ALHOWIDI',
    email: 'Abdulaziz@hotmail.com',
    gender: 'Male',
    birthDate: '1990-01-12',
    nationality: 'Saudi',
    nationalID: '123456789',
    maritalStatus: 'Married',
    familyMembers: 3,
    address: 'Building no 45, st all suaid',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    postalCode: '12211',
    phoneNumber: '+966555445041',
    landlineNumber: '+9612-345-6789',
    workSector: 'Accountent',
    employer: 'Alrajhi Bank',
    startedFrom: '2020-01-01',
    basicSalary: '12,000 SAR',
    allowance: '700 SAR',
    bankName: 'Alrajhi Bank',
    foodAndBeverages: '1200 SAR',
    housing: '3000 SAR',
    utilities: '700 SAR',
    healthCareAndInsurance: '900 SAR',
    transport: '300 SAR',
    communications: '170 SAR',
    educationFees: '0 SAR',
    homeServants: '2000 SAR',
    feesOnExpats: '500 SAR',
    otherFutureExpenses: '1000 SAR',
    otherCurrentExpenses: '0 SAR',
    houseOwnership: 'Owned',
    insurance: 'Full Coverage',
    about:'',
    userImg: 'assets/images/userImg.jpeg',
    cashBack:'yes',
    balanceTtransfer:'150,000 SAR',
    apr:'2%',
   rewards:'yes',
   travel:'yes',
   business:'no',
   student:'no',
   noAnnualFee:'no',
   airline:'saudi arabia',
   noForeignFransactionFees:'yes',
   eventCount:'5',
   emailsCount:'11',
   weatherDegree:'27'
  };

  getUserData(): Observable<UserData> {
    return of(this.userData);
  }

  // getUserData(): UserData {
  //   return this.userData;
  // }

  updateUserData(data: UserData): void {
    this.userData = data;
  }
}
