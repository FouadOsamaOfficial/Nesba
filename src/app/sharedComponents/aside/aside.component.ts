import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { Router } from '@angular/router';
import {  UserData, UserDataService } from 'src/app/Services/User-Data/user-data.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  // @Input() isLoggedIn: boolean = false;
  @ViewChild('headerAvatar', { static: true }) headerAvatar!: ElementRef;
  @ViewChild('subHeadings') subHeadings!: ElementRef;
  // @Output() logoutEvent = new EventEmitter<void>();

  isDropdownActive: boolean = false;
  userData: UserData | undefined

  constructor(private router: Router, private renderer: Renderer2 ,private userDataService: UserDataService) {

  }

ngOnInit(): void {
  this.userDataService.getUserData().subscribe(data => {
    this.userData = data;
  });
}
  logo() {
    this.router.navigate(['./user-dashboard']);
  }
  toAccount() {
    this.router.navigate(['./user-profile']);
  }
  toSettings() {
    this.router.navigate(['./user-profile']);
  }
  toHelp() {
    this.router.navigate(['./contact']);
  }
  logout() {
    this.router.navigate(['./home']);
  }
  toDashboard() {
    this.router.navigate(['./user-dashboard']);
  }
  toFunding() {
    this.router.navigate(['./funding']);
  }
  toPreviousFunding() {
    this.router.navigate(['./previous-funding']);
  }
  toFundingTracker() {
    this.router.navigate(['./funding-tracker']);
  }
  toNewFinancing() {
    this.router.navigate(['./services']);
  }
  toFinanceProducts() {
    this.router.navigate(['./finance-products']);
  }
  toCards() {
    this.router.navigate(['./cards']);
  }
  toInvestment() {
    this.router.navigate(['./investment']);
  }
  toEmails(){
    this.router.navigate(['./emails']);
  }
  toUpcomingEvents(){
    this.router.navigate(['./events']);
  }
  toDocument(){
    this.router.navigate(['./documents']);
  }


  // logout() {
  //   this.logoutEvent.emit();
  // }

  toProfile() {
    this.router.navigate(['./user-profile']);

  }
  toggleDropdown() {
    const dropdown = this.headerAvatar.nativeElement.nextElementSibling;
    console.log('Dropdown element:', dropdown); // Check if this is correctly finding the dropdown

    if (dropdown) {
      this.renderer.addClass(dropdown, 'dropdown--active');
    } else {
      console.error('Dropdown element not found.');
    }
  }
  toggleSubheading(subHeading: HTMLElement) {
    subHeading.classList.toggle('navList__subheading--open');
    const subList = subHeading.nextElementSibling;
    if (subList) {
      subList.classList.toggle('subList--hidden');
    }
  }

  renderChart() {
    const chart = am4core.create("chartdiv", am4charts.XYChart);
    // Chart configuration
  }

  onMenuClick() {
    const sidenav = document.querySelector('.sidenav');
    const grid = document.querySelector('.grid');
    sidenav?.classList.toggle('sidenav--active');
    grid?.classList.toggle('grid--noscroll');
  }

  onCloseClick() {
    const sidenav = document.querySelector('.sidenav');
    const grid = document.querySelector('.grid');
    sidenav?.classList.remove('sidenav--active');
    grid?.classList.remove('grid--noscroll');
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

