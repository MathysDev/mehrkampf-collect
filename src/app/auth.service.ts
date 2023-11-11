import { Injectable, NgZone } from '@angular/core';
import firebase from "firebase/app"
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user,onAuthStateChanged ,getAuth ,signInWithEmailAndPassword } from  '@angular/fire/auth';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { doc } from '@angular/fire/firestore';
import { DocumentReference, DocumentData } from '@firebase/firestore-types';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from "src/environments/environment";



export interface User {
    uid: string;
    email: string |null;
    displayName: string |null;
    photoURL: string | null;
    emailVerified: boolean;
	
 }

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    userState: any;

    constructor(
      public afAuth: Auth,
      public afs: Firestore,
      
      public router: Router,
      public ngZone: NgZone
      
    ) {
      

      const app = initializeApp(environment.firebaseConfig);

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
  

  



    async SetUserData(user: User) {
      //const userRef: DocumentReference<User> = doc(this.afs,`users/${user.uid}`);
      const userState: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      }
      
    }

    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['sign-in']);
      })
    }  
}