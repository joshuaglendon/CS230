import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertComponent } from './alert/alert.component';

import { AppComponent } from './app.component';
import { BottomNavBarComponent} from './footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { PictureComponent } from './picture/picture.component';
import { WordComponent } from './word/word.component';
import { DonateComponent } from './header/donate.component';
import { LoginComponent } from './header/login.component';
import { SignupComponent } from './header/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesScienceComponent } from './courses/courses-science.component';
import { ScienceCardComponent } from './courses/science-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { EditUserInfoComponent } from './header/edit-user-info.component';
import { FormsModule } from '@angular/forms';
import { SignupEmailComponent } from './header/signup-email.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    AlertComponent,
    PictureComponent,
    LayoutComponent,
    WordComponent,
    DonateComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CoursesComponent,
    CoursesScienceComponent,
    ScienceCardComponent,
    UserInfoComponent,
    EditUserInfoComponent,
    SignupEmailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'khanacademy-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
