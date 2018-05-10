import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { HttpClientModule } from '@angular/common/http';
import {  InfoPage } from '../pages/info/info';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MonsteritProvider } from '../providers/monsterit/monsterit';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MonsteritProvider
  ]
})
export class AppModule {}
