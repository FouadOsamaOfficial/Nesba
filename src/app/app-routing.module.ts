import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RateIntroductionComponent } from './Components/rate-introduction/rate-introduction.component';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';

import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { PreviousFundingComponent } from './Components/previous-funding/previous-funding.component';
import { ServicesComponent } from './Components/services/services.component';
import { FinanceProductsComponent } from './Components/finance-products/finance-products.component';
import { CardsComponent } from './Components/cards/cards.component';
import { InvestmentComponent } from './Components/investment/investment.component';
import { FundingComponent } from './Components/funding/funding.component';
import { TermsComponent } from './Components/terms/terms.component';
import { FundingTrackerComponent } from './Components/funding-tracker/funding-tracker.component';
import { ContactComponent } from './Components/contact/contact.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { LoginComponent } from './sharedComponents/login/login.component';
import { SignupComponent } from './sharedComponents/signup/signup.component';
import { SecurityComponent } from './sharedComponents/security/security.component';
import { PrivacyComponent } from './sharedComponents/privacy/privacy.component';
import { DocumentsComponent } from './Components/documents/documents.component';
import { SpendingComponent } from './Components/spending/spending.component';
import { EventsComponent } from './Components/events/events.component';
import { EmailsComponent } from './Components/emails/emails.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'who-we-are', component: WhoWeAreComponent },
{ path: 'rate-introduction' , component: RateIntroductionComponent },
{ path: 'login' , component: LoginComponent },
{ path: 'sign-up' , component: SignupComponent },
{ path: 'user-profile' , component:UserProfileComponent  },
{ path: 'services' , component:ServicesComponent  },
{ path: 'funding' , component:FundingComponent  },
{ path: 'funding-tracker' , component:FundingTrackerComponent  },
{ path: 'previous-funding' , component: PreviousFundingComponent },
{ path: 'finance-products' , component:FinanceProductsComponent },
{ path: 'user-dashboard' , component:UserDashboardComponent },
{ path: 'cards' , component:CardsComponent },
{ path: 'investment' , component:InvestmentComponent },
{ path: 'terms' , component:TermsComponent },
{ path: 'contact' , component:ContactComponent },
{ path: 'privacy' , component:PrivacyComponent },
{ path: 'security' , component:SecurityComponent },
{ path: 'documents' , component:DocumentsComponent },
{ path: 'spending' , component:SpendingComponent },
{ path: 'events' , component:EventsComponent },
{ path: 'emails' , component:EmailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
