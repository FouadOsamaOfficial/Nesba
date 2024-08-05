import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData, UserDataService } from 'src/app/Services/User-Data/user-data.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent {
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
