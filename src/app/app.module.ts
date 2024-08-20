import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';

import { RateIntroductionComponent } from './Components/rate-introduction/rate-introduction.component';
import { ContactComponent } from './Components/contact/contact.component';

import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { FundingComponent } from './Components/funding/funding.component';
import { PreviousFundingComponent } from './Components/previous-funding/previous-funding.component';
import { FundingTrackerComponent } from './Components/funding-tracker/funding-tracker.component';
import { ServicesComponent } from './Components/services/services.component';
import { FinanceProductsComponent } from './Components/finance-products/finance-products.component';
import { CardsComponent } from './Components/cards/cards.component';
import { InvestmentComponent } from './Components/investment/investment.component';
import { TermsComponent } from './Components/terms/terms.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { LoginComponent } from './sharedComponents/login/login.component';
import { SignupComponent } from './sharedComponents/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsideComponent } from './sharedComponents/aside/aside.component';
import { PrivacyComponent } from './sharedComponents/privacy/privacy.component';
import { SecurityComponent } from './sharedComponents/security/security.component';
import { DocumentsComponent } from './Components/documents/documents.component';
import { SpendingComponent } from './Components/spending/spending.component';
import { EventsComponent } from './Components/events/events.component';
import { EmailsComponent } from './Components/emails/emails.component';
import { ComingSoonComponent } from './sharedComponents/coming-soon/coming-soon.component';
import { DebitComponent } from './Components/debit/debit.component';
import { CreditComponent } from './Components/credit/credit.component';
import { MortgageFinanceComponent } from './Components/mortgage-finance/mortgage-finance.component';
import { PersonalFinanceComponent } from './Components/personal-finance/personal-finance.component';
import { AutoLeaseFinanceComponent } from './Components/auto-lease-finance/auto-lease-finance.component';
import { UnitsModalComponent } from './sharedComponents/units-modal/units-modal.component';
import { AuthService } from './Services/Auth/auth.service';
import { RealEstateMarketComponent } from './sharedComponents/real-estate-market/real-estate-market.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { OldEventsComponent } from './Components/old-events/old-events.component';
import { OldDocumentsComponent } from './Components/old-documents/old-documents.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { GuestFinanceProductsComponent } from './Components/guest-finance-products/guest-finance-products.component';
import { GuestCardsComponent } from './Components/guest-cards/guest-cards.component';
import { GuestInvestmentComponent } from './Components/guest-investment/guest-investment.component';
import { ServiceProviderComponent } from './Components/service-provider/service-provider.component';
import { SlectedUniteComponent } from './Components/SlectedUnite/slected-unite/slected-unite.component';


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
    UserDashboardComponent,
    AsideComponent,
    PrivacyComponent,
    SecurityComponent,
    DocumentsComponent,
    SpendingComponent,
    EventsComponent,
    EmailsComponent,
    ComingSoonComponent,
    DebitComponent,
    CreditComponent,
    // SafeUrlPipe,
    MortgageFinanceComponent,
    PersonalFinanceComponent,
    AutoLeaseFinanceComponent,
    UnitsModalComponent,
    RealEstateMarketComponent,
    OldEventsComponent,
    OldDocumentsComponent,
    NotFoundComponent,
    GuestFinanceProductsComponent,
    GuestCardsComponent,
    GuestInvestmentComponent,
    ServiceProviderComponent,
    SlectedUniteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule

    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
