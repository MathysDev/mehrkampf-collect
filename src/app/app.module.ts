import { LaufzettelService } from "./shared/laufzettel.service";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAuthService } from "./auth.service";

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeilnehmerComponent } from './teilnehmer/teilnehmer.component';
import { LaufzettelComponent } from './laufzettel/laufzettel.component';
import { LaufzettelListComponent } from './laufzettel-list/laufzettel-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StartnrselComponent } from './startnrsel/startnrsel.component';
import { LoginComponent } from './login/login.component';




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
    AppRoutingModule,
	AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
	ReactiveFormsModule ,
	AngularFireAuthModule
	
  ],
  providers: [ LaufzettelService, NgAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
