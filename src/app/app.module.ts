import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertComponent } from './alert/alert.component';

import { AppComponent } from './app.component';
import { BottomNavBarComponent} from './footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { PictureComponent } from './picture/picture.component';
import { WordComponent } from './word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    AlertComponent,
    PictureComponent,
    LayoutComponent,
    WordComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
