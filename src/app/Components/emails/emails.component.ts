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
  selectedEmail: EmailItem | null = null;
  showModal = false;
  viewMode = true; // Control view and reply mode
  replyMode = false;
  replyBody = ''; // Store reply message

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
    this.selectedEmail = this.emailService.getEmailById(id) || null;
    if (this.selectedEmail) {
      this.showModal = true;
      this.viewMode = false; // Switch to reply mode
      this.replyMode = true;
    }
  }

  openEmail(id: string) {
    this.selectedEmail = this.emailService.getEmailById(id) || null;
    if (this.selectedEmail) {
      this.showModal = true;
      this.viewMode = true; // Switch to view mode
      this.replyMode = false;
    }
  }

  closeModal() {
    this.showModal = false;
    this.selectedEmail = null;
    this.replyBody = '';
  }

  sendReply() {
    if (this.selectedEmail) {
      console.log(`Replying to: ${this.selectedEmail.subject} with message: ${this.replyBody}`);
      // Implement the actual sending logic here
      this.closeModal();
    }
  }

  switchToReplyMode() {
    this.viewMode = false;
    this.replyMode = true;
  }

  previous() {
    this.router.navigate(['./user-dashboard']);
  }
}
