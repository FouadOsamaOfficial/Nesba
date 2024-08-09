import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { Router } from '@angular/router';
import { UserData, UserDataService } from 'src/app/Services/User-Data/user-data.service';
import { DocumentsService } from 'src/app/Services/Documents/documents.service';
import { EventData, EventsService } from 'src/app/Services/Events/events.service';
type DropdownKeys = 'funding' | 'loan' | 'mortgage' | 'inbox' | 'unread' | 'archives' | 'vacation' | 'anniversary' | 'university' | 'finances' | 'callStats' | 'tripLogs' | 'newFeature' | 'userDiscounts' | 'govStatement';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  @ViewChild('headerAvatar', { static: true }) headerAvatar!: ElementRef;
  @ViewChild('funding') funding!: ElementRef;

  isDropdownActive: boolean = false;

  userData: UserData | undefined;
  documents: { name: string, size: string, date: Date, type?: string, preview?: string }[] = [];

  events: EventData[] = []; // Define the property


  dropdowns: Record<DropdownKeys, boolean> = {
    funding: false,
    loan: false,
    mortgage: false,
    inbox: false,
    unread: false,
    archives: false,
    vacation: false,
    anniversary: false,
    university: false,
    finances: false,
    callStats: false,
    tripLogs: false,
    newFeature: false,
    userDiscounts: false,
    govStatement: false,
  };
  constructor(private eventsService: EventsService,private router: Router, private renderer: Renderer2,private userDataService: UserDataService , private documentsService: DocumentsService) { }


  toggleDropdowns(dropdown: DropdownKeys) {
    this.dropdowns[dropdown] = !this.dropdowns[dropdown];
  }

  toProfile() {
    this.router.navigate(['./user-profile']);

  }
  goingToFunding() {
    this.router.navigate(['./funding']);

  }

  goingToNewFinancing() {
    this.router.navigate(['./services']);

  }
  goToEvents() {
    this.router.navigate(['./events']);

  }
  goToDocuments() {
    this.router.navigate(['./documents']);

  }
  goToSpending() {
    this.router.navigate(['./spending']);

  }
  goToEmails() {
    this.router.navigate(['./emails']);

  }
  logout() {
    this.router.navigate(['./home']);

  }

  toFundingTracker() {
    this.router.navigate(['./funding-tracker']);


  }
  toPreviousFunding() {
    this.router.navigate(['./previous-funding']);


  }
  toMutualFunds() {
    this.router.navigate(['./coming-soon']);

  }
  toTadawul() {
    this.router.navigate(['./coming-soon']);

  }
  toSavingWallet() {
    this.router.navigate(['./coming-soon']);

  }
  toCards() {
    this.router.navigate(['./cards']);

  }
  toDebits() {
    this.router.navigate(['./debits']);

  }
  toCredits() {
    this.router.navigate(['./credits']);

  }

  toMortgageFinance() {
    this.router.navigate(['./mortgage-finance']);

  }
  toAutoLeaseFinance() {
    this.router.navigate(['./auto-lease-finance']);

  }
  toPersonalFinance() {
    this.router.navigate(['./personal-finance']);

  }

  toDeletedMails() {

  }
  toReplayedMails() {

  }

  goUpcomingEvents() {
    this.router.navigate(['./events']);

  }
  toLastEvents() {

  }
  toDecuments() {
    this.router.navigate(['./documents']);

  }
  toReviwedDocuments() { }
  toDocumentsStatus() { }
  toOldDocuments(){}


  ngOnInit(): void {
    this.documents = this.documentsService.getFiles();

    this.userDataService.getUserData().subscribe(data => {
      this.userData = data;
      console.log('User Data:', this.userData); 
    });
    this.events = this.eventsService.getEvents(); 

    this.renderChart();
    
  }

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
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
  removeExtension(fileName: string): string {
    return fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
  }
}
