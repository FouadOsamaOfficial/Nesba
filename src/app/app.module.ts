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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
