import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  @ViewChild('subHeadings') subHeadings!: ElementRef;
  @ViewChild('headerAvatar')headerAvatar!: ElementRef;
  isDropdownActive: boolean = false;


  constructor( private router:Router ,private renderer: Renderer2){}
  toProfile(){
    this.router.navigate(['./user-profile']);

  }
  goingToFunding(){
    this.router.navigate(['./funding']);

  }

  goingToNewFinancing(){
    this.router.navigate(['./services']);
  
  }
  goToEvents(){
    this.router.navigate(['./events']);

  }
  goToDocuments(){
    this.router.navigate(['./documents']);

  }
  goToSpending(){
    this.router.navigate(['./spending']);

  }
  goToEmails(){
    this.router.navigate(['./emails']);

  }
  




  @HostListener('document:click', ['$event'])
  clickOutsideDropdown(event: MouseEvent) {
    if (this.isDropdownActive && !this.headerAvatar.nativeElement.contains(event.target)) {
      this.isDropdownActive = false;
    }
  }

  ngOnInit(): void {
    this.renderChart();

  }

  // toggleDropdown() {
  //   const dropdown = this.headerAvatar.nativeElement.nextElementSibling;
  //   dropdown.classList.toggle('dropdown--active');
  // }
  

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
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
