import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { RateIntroductionComponent } from './Components/rate-introduction/rate-introduction.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './sharedComponents/login/login.component';
import { SignupComponent } from './sharedComponents/signup/signup.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { FundingComponent } from './Components/funding/funding.component';
import { PreviousFundingComponent } from './Components/previous-funding/previous-funding.component';
import { FundingTrackerComponent } from './Components/funding-tracker/funding-tracker.component';
import { ServicesComponent } from './Components/services/services.component';
import { FinanceProductsComponent } from './Components/finance-products/finance-products.component';
import { CardsComponent } from './Components/cards/cards.component';
import { InvestmentComponent } from './Components/investment/investment.component';
import { TermsComponent } from './Components/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoWeAreComponent,
    FooterComponent,
    HeaderComponent,
    RateIntroductionComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent,
    FundingComponent,
    PreviousFundingComponent,
    FundingTrackerComponent,
    ServicesComponent,
    FinanceProductsComponent,
    CardsComponent,
    InvestmentComponent,
    TermsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
