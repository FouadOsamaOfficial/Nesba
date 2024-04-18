import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  error: string = '';
  successMessage: string = '';

  validate(form: any) {
    if (form.invalid) {
      this.error = 'Please fill out all fields correctly.';
      return;
    }

    if (form.value.name.length < 3) {
      this.error = 'Your name should be at least 3 characters long.';
      return;
    }

    if (!(form.value.email.includes('.') && (form.value.email.includes('@')))) {
      this.error = 'Please enter a valid email address.';
      return;
    }

    if (!this.emailIsValid(form.value.email)) {
      this.error = 'Please enter a valid email address.';
      return;
    }

    if (form.value.message.length < 15) {
      this.error = 'Please write a longer message.';
      return;
    }

    this.error = '';
    this.successMessage = 'Thank you! I will get back to you as soon as possible.';

    setTimeout(() => {
      this.successMessage = '';
      form.reset();
    }, 6000);
  }

  emailIsValid(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

}
