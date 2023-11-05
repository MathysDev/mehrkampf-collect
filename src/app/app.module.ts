import { LaufzettelService } from "./shared/laufzettel.service";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAuthService } from "./auth.service";
import { RouterModule } from '@angular/router';

import { environment } from "src/environments/environment";
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';

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
    RouterModule,
    FormsModule,
    AppRoutingModule,
     
	ReactiveFormsModule 
	
 
  
	
  ],
  providers: [ LaufzettelService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
