import { Injectable, NgZone } from '@angular/core';
import firebase from "firebase/app"
import "firebase/auth"
import { AngularFireAuth } from "@angular/fire/auth";
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
      public afs: Firestore,
      public afAuth: AngularFireAuth,
      public router: Router,
      public ngZone: NgZone
    ) {
      this.afAuth.authState.subscribe(user => {
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
      return this.afAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.ngZone.run(() => {
            this.router.navigate(['start']);
          });
          this.SetUserData(result.user);
        }).catch((error) => {
          window.alert(error.message)
        })
    }
  



  
    ForgotPassword(passwordResetEmail) {
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
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