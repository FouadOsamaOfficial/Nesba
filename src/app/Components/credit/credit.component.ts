import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData, UserDataService } from 'src/app/Services/User-Data/user-data.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {
  constructor(private router:Router,private userDataService: UserDataService){}
  userData: UserData | undefined;


  ngOnInit(): void {
    this.userDataService.getUserData().subscribe(data => {
      this.userData = data;
    });

  }

  previous() {
    this.router.navigate(['./cards']);

  }

}
