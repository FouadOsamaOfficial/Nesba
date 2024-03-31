import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { RateIntroductionComponent } from './Components/rate-introduction/rate-introduction.component';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'who-we-are', component: WhoWeAreComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'rate-introduction' , component: RateIntroductionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
