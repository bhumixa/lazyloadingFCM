
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from 'angularfire2/auth';
/*import * as firebase from 'firebase/app';*/
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DatabaseserviceProvider } from '../providers/databaseservice/databaseservice';
import { HttpModule } from '@angular/http';

import { FCM } from '@ionic-native/fcm';

export const firebaseConfig = {
  apiKey: "AIzaSyB9bXEWCVxU1mMN8QMVv1x1BkwRHW-A2HE",
  authDomain: "lazyloadingfcm.firebaseapp.com",
  databaseURL: "https://lazyloadingfcm.firebaseio.com",
  projectId: "lazyloadingfcm",
  storageBucket: "lazyloadingfcm.appspot.com",
  messagingSenderId: "205625167098"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    DatabaseserviceProvider,
    FCM
  ]
})
export class AppModule {}
