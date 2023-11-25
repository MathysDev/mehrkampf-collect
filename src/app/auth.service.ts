import { Injectable, NgZone } from '@angular/core';

import {  GoogleAuthProvider, signInWithPopup, signOut, user,onAuthStateChanged ,getAuth ,signInWithEmailAndPassword,Auth } from  '@angular/fire/auth';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { doc } from '@angular/fire/firestore';

import { provideFirebaseApp, initializeApp,FirebaseApp } from '@angular/fire/app';
import { environment } from "src/environments/environment" ;
import {LaufzettelService} from "./shared/laufzettel.service";


export interface User {
    uid: string;
    email: string |null;
    displayName: string |null;
    photoURL: string | null;
    emailVerified: boolean;
	
 }

@Injectable({
  providedIn: 'root',
})

export class AuthService {
    userState: any;
    userRef: any;
auth: Auth;
    constructor(
      private afs: LaufzettelService,
      private afApp: FirebaseApp,
      
      public router: Router,
      public ngZone: NgZone,
     )
     {
      
      this.auth = getAuth(this.afApp)
      

      onAuthStateChanged(this.auth,user => {
        if (user) {
          this.userState = user;
          localStorage.setItem('user', JSON.stringify(this.userState));
          JSON.parse(localStorage.getItem('user') || '{}');
        } else {
          localStorage.setItem('user', '');
          JSON.parse(localStorage.getItem('user') || '{}');
        }
      })
    }
  
    SignIn(email, password) {
      const auth = getAuth();
      return signInWithEmailAndPassword(auth,email, password)
        .then((result) => {
          this.ngZone.run(() => {
            this.router.navigate(['start']);
          });
          this.SetUserData(result.user);
        }).catch((error) => {
          window.alert(error.message)
        })
    }
  


  
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      return (user !== null && user.email !== undefined ) ? true : false;
    }
  


    async SetUserData(user: User) {
      
      const userState: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      }
      const userData =  userState ; // convert to plain JavaScript object
      this.afs.insertUser(userData,user.uid);
    }

    SignOut() {
      const auth = getAuth();
      return signOut(auth).then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['sign-in']);
      })
    }  
}