import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesScienceComponent } from './courses/courses-science.component';
import { DonateComponent } from './header/donate.component';
import { LoginComponent } from './header/login.component';
import { SignupEmailComponent } from './header/signup-email.component';
import { SignupComponent } from './header/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'donate', component: DonateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'science', component: CoursesScienceComponent},
  { path: 'signup-email', component: SignupEmailComponent}
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
