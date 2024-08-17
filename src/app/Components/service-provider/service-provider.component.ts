import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {
    showModal: boolean = false;
    messageShown: boolean = false;
  
    constructor(private router: Router) {}
  
    ngOnInit(): void {
      setTimeout(() => {
        this.showModal = true;
  
        setTimeout(() => {
          this.messageShown = true;
  
          setTimeout(() => {
            this.showModal = false;
            this.messageShown = false;
            this.router.navigate(['/cards']); 
          }, 5000); 
        }, 0); 
      }, 10000); 
    }
  
    onClose(): void {
      this.showModal = false;
      this.messageShown = false;
    }
}
