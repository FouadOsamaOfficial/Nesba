import { Injectable } from '@angular/core';
export interface EmailItem {
  id: string;
  subject: string;
  sender: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class EmailService {


  private emails: EmailItem[] = [
    { id: '1', subject: 'Welcome!', sender: 'admin@example.com', body: 'Welcome to our service!' },
    { id: '2', subject: 'Reminder', sender: 'reminder@example.com', body: 'This is a reminder for your upcoming event.' },
    { id: '3', subject: 'Special Offer', sender: 'offers@example.com', body: 'Check out our special offers just for you.' },
    { id: '4', subject: 'Special Offer', sender: 'offers@example.com', body: 'Check out our special offers just for you.' },
    { id: '5', subject: 'Special Offer', sender: 'offers@example.com', body: 'Check out our special offers just for you.' },
    { id: '6', subject: 'Special Offer', sender: 'offers@example.com', body: 'Check out our special offers just for you.' },
    { id: '7', subject: 'Special Offer', sender: 'offers@example.com', body: 'Check out our special offers just for you.' },
    { id: '8', subject: 'Special Offer', sender: 'offers@example.com', body: 'Check out our special offers just for you.' },
    { id: '9', subject: 'Special Offer', sender: 'offers@example.com', body: 'Check out our special offers just for you.' },
    { id: '10', subject: 'Special Offer', sender: 'offers@example.com', body: 'Check out our special offers just for you.' },
    { id: '11', subject: 'Special Offer', sender: 'offers@example.com', body: 'Check out our special offers just for you.' },
    // Add more dummy emails here...
  ];

  constructor() { }

  getEmails(): EmailItem[] {
    return [...this.emails]; // return a copy of the emails array
  }

  deleteEmail(id: string): void {
    this.emails = this.emails.filter(email => email.id !== id);
  }

  getEmailById(id: string): EmailItem | undefined {
    return this.emails.find(email => email.id === id);
  }
}
