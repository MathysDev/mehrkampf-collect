import { Injectable, NgZone } from '@angular/core';
import firebase from "firebase/app"
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user,onAuthStateChanged ,getAuth ,signInWithEmailAndPassword } from  '@angular/fire/auth';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Router } from "@angular/router";

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
	
 }

@Injectable({
  providedIn: 'root'
})

export class NgAuthService {
    userState: any;

    constructor(
      public afAuth: Auth,
      public afs: Firestore,
      
      public router: Router,
      public ngZone: NgZone
      
    ) {
      

const auth = getAuth();

      onAuthStateChanged(auth,user => {
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
      return (user !== null && user.emailVerified !== false) ? true : false;
    }
  

  
    AuthLogin(provider) {
      return this.afAuth.signInWithPopup(provider)
      .then((result) => {
         this.ngZone.run(() => {
            this.router.navigate(['start']);
          })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
    }
  
    SetUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userState: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
		
      }
      return userRef.set(userState, {
        merge: true
      })
    }
   
    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['sign-in']);
      })
    }  
}