import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { RateIntroductionComponent } from './Components/rate-introduction/rate-introduction.component';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';
import { LoginComponent } from './sharedComponents/login/login.component';
import { SignupComponent } from './sharedComponents/signup/signup.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { FundingComponent } from './Components/funding/funding.component';
import { PreviousFundingComponent } from './Components/previous-funding/previous-funding.component';
import { FundingTrackerComponent } from './Components/funding-tracker/funding-tracker.component';
import { ServicesComponent } from './Components/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'who-we-are', component: WhoWeAreComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'rate-introduction' , component: RateIntroductionComponent },
{ path: 'login' , component: LoginComponent },
{ path: 'sign-up' , component: SignupComponent },
{ path: 'user-profile' , component:UserProfileComponent  },
{ path: 'services' , component:ServicesComponent  },
{ path: 'funding' , component:FundingComponent  },
{ path: 'previous-funding' , component: PreviousFundingComponent },
{ path: 'funding-tracker ' , component:FundingTrackerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
