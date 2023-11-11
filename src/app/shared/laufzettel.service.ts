
import { UntypedFormControl, UntypedFormGroup , ReactiveFormsModule  } from "@angular/forms";
import { Firestore,collection,updateDoc, doc,docData,collectionData} from '@angular/fire/firestore';

import { AuthService } from "../auth.service";
import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LaufzettelService {

constructor(private firestore: Firestore,private afs: Firestore) {
	
	

}
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
			
			return collectionData(collection(this.firestore,"Teilnehmer") );
		}else {
			return collectionData(collection(this.firestore,"Teilnehmer")) ;
		
		
		}
		
	}

	@Injectable({
		providedIn: 'root'
	})


		
		



getTeilnehmerid(id: BigInteger) {
			return  docData(doc(this.firestore, 'Teilnehmer/' + id))
			
		
		
		
	}
	updateLaufzettel(data,id) {
		data.completed = true;
			
			updateDoc(doc(this.firestore, 'Teilnehmer',id),data);
			
	}
	}
	 
	


