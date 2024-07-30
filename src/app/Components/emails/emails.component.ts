import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService, EmailItem } from '../../Services/email/email.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {

  emails: EmailItem[] = [];
  filteredEmails: EmailItem[] = [];
  paginatedEmails: EmailItem[] = [];
  showOptions = [5, 10, 15, 20];
  showCount = 5;
  currentPage = 1;
  totalPages = 1;
  pages: number[] = [];
  selectedEmail: EmailItem | null = null; // Track the selected email for modal display
  showModal: boolean = false; // Control the visibility of the modal

  constructor(
    private router: Router,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.emails = this.emailService.getEmails();
    this.filteredEmails = [...this.emails];
    this.updatePagination();
  }

  changeShowCount(event: any) {
    this.showCount = event.target.value;
    this.updatePagination();
  }

  filterEmails(event: any) {
    const value = event.target.value.toLowerCase();
    this.filteredEmails = this.emails.filter(item => item.subject.toLowerCase().includes(value));
    this.updatePagination();
  }

  updatePagination() {
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredEmails.length / this.showCount);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.paginatedEmails = this.filteredEmails.slice(0, this.showCount);
  }

  goToPage(page: number) {
    this.currentPage = page;
    const start = (this.currentPage - 1) * this.showCount;
    const end = this.currentPage * this.showCount;
    this.paginatedEmails = this.filteredEmails.slice(start, end);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  deleteEmail(id: string) {
    this.emailService.deleteEmail(id);
    this.emails = this.emailService.getEmails();
    this.filteredEmails = this.filteredEmails.filter(email => email.id !== id);
    this.updatePagination();
  }

  replayEmail(id: string) {
    const email = this.emailService.getEmailById(id);
    if (email) {
      console.log(`Replaying email: ${email.subject}`);
      // Implement the reply logic here
    }
  }

  openEmail(id: string) {
    this.selectedEmail = this.emails.find(email => email.id === id) || null;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedEmail = null;
  }

  previous() {
    this.router.navigate(['./user-dashboard']);
  }
}
