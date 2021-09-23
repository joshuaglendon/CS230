import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './header/donate.component';
import { LoginComponent } from './header/login.component';
import { SignupComponent } from './header/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'donate', component: DonateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
