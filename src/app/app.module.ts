
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { environment } from "src/environments/environment";
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {  provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeilnehmerComponent } from './teilnehmer/teilnehmer.component';
import { LaufzettelComponent } from './laufzettel/laufzettel.component';
import { LaufzettelListComponent } from './laufzettel-list/laufzettel-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StartnrselComponent } from './startnrsel/startnrsel.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import 'init';




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
    HttpClientModule,
    ReactiveFormsModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => {
      const  firestore = getFirestore();
      
      return  firestore;
}),

    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
