import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { CookieConsentComponent } from './cookieConsent/cookieConsent.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      CookieConsentComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      NotifierModule.withConfig(
         // add custom config here
      )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
