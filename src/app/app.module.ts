import { LaufzettelService } from "./shared/laufzettel.service";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAuthService } from "./auth.service";
import { RouterModule } from '@angular/router';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, getFirestore, provideFirestore } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeilnehmerComponent } from './teilnehmer/teilnehmer.component';
import { LaufzettelComponent } from './laufzettel/laufzettel.component';
import { LaufzettelListComponent } from './laufzettel-list/laufzettel-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StartnrselComponent } from './startnrsel/startnrsel.component';
import { LoginComponent } from './login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';




@NgModule({
  declarations: [
    AppComponent,
    TeilnehmerComponent,
    LaufzettelComponent,
    LaufzettelListComponent,
    StartnrselComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
	AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
	ReactiveFormsModule ,
	AngularFireAuthModule,
 provideFirebaseApp(() => initializeApp({"projectId":"kadettentage-9816c","appId":"1:280870830430:web:69a4cb6a5c0b7b4c200fcf","storageBucket":"kadettentage-9816c.appspot.com","locationId":"europe-west6","apiKey":"AIzaSyBnag-gwVNFJDSEd_KaDEK1w0U7wURFwzE","authDomain":"kadettentage-9816c.firebaseapp.com","messagingSenderId":"280870830430"})),
 provideFirestore(() => getFirestore())
	
  ],
  providers: [ LaufzettelService, NgAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
