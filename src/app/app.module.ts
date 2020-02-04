import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule } from '@angular/fire/auth'

// 2. Add your credentials from step 1
const config = {
    apiKey: 'AIzaSyA_k4a2PjSqvSCioHf9Em7PQ0fWWicDk40',
    authDomain: 'cloudfn-6cdb1.firebaseapp.com',
    databaseURL: 'https://cloudfn-6cdb1.firebaseio.com',
    projectId: 'cloudfn-6cdb1',
    storageBucket: 'cloudfn-6cdb1.appspot.com',
    messagingSenderId: '649150210672',
    appId: '1:649150210672:web:07a7bc7612c9d970480ab5'
}

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        // 3. Initialize
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule, // firestore
        AngularFireAuthModule, // auth
        AngularFireStorageModule // storage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
