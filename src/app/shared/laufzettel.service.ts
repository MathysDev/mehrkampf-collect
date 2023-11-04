import { Injectable } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule  } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { NgAuthService } from "../auth.service";


@Injectable({
  providedIn: 'root'
})
export class LaufzettelService {

constructor(private firestore: AngularFirestore) {}
    form = new FormGroup({        
        Vorname: new FormControl(""),
        StartNr: new FormControl(""),
        Name: new FormControl(""), 
        completed: new FormControl(false),
		Wertung1: new FormControl(false),
		Wertung2: new FormControl(false),
		Wertung3: new FormControl(false),
		Wertung4: new FormControl(false),
		Wertung5: new FormControl(false),
		Wertung6: new FormControl(false)
    });
	
	getUserKorp() {
		const user = JSON.parse(localStorage.getItem('user') || '{}');
		
		var Korp: string
		
		//this.firestore.collection("users").doc(user.uid).ref.get().then(function(doc: any) {
			
			//	console.log( doc.data().Korp);
			//	Korp = doc.data().Korp;
			////	return Korp;
				
				
				
		//})
		var usermail: String
		var usermailu: String
		usermail = user.email
		usermailu = usermail.toUpperCase()
		//console.log(usermailu.substr(0,1));
		return usermailu.substr(0,1);
	}
	
	 getTeilnehmer() {
		if (this.getUserKorp() == "A" ){
			console.log(this.getUserKorp())
			return this.firestore.collection("Teilnehmer").snapshotChanges();
		}else {
			return this.firestore.collection("Teilnehmer", ref => ref.where("Korp", "==", this.getUserKorp() )).snapshotChanges();
		
		}
		
	}
	 getTeilnehmerid(id) {
			return  this.firestore.collection("Teilnehmer").doc(id).ref.get().then(function(doc: any) { return doc.data()});
			
		
		
		
	}
	
	updateLaufzettel(data,id) {
		data.completed = true;
			this.firestore
			.collection("Teilnehmer")
			.doc(id)
			.update(data);
	}
}
