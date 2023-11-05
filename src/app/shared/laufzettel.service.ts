import { Injectable } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup , ReactiveFormsModule  } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { NgAuthService } from "../auth.service";


@Injectable({
  providedIn: 'root'
})
export class LaufzettelService {

constructor(private firestore: AngularFirestore) {}
    form = new UntypedFormGroup({        
        Vorname: new UntypedFormControl(""),
        StartNr: new UntypedFormControl(""),
        Name: new UntypedFormControl(""), 
        completed: new UntypedFormControl(false),
		Wertung1: new UntypedFormControl(false),
		Wertung2: new UntypedFormControl(false),
		Wertung3: new UntypedFormControl(false),
		Wertung4: new UntypedFormControl(false),
		Wertung5: new UntypedFormControl(false),
		Wertung6: new UntypedFormControl(false)
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
