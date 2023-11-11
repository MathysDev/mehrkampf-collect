
import { UntypedFormControl, UntypedFormGroup , ReactiveFormsModule  } from "@angular/forms";
import { Firestore,collection,updateDoc, doc,docData,collectionData} from '@angular/fire/firestore';
import { AuthService} from "../auth.service";

import { Injectable, inject } from '@angular/core';



import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LaufzettelService {
afs: Firestore;
constructor(AuthService: AuthService ) {
	
this.afs = inject(Firestore);
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
		
	
		var usermail: String
		var usermailu: String
		
		usermail = user.email
		usermailu = usermail.toUpperCase()
		//console.log(usermailu.substring(0,1));
		return usermailu.substring(0,1);
	}
	
	 getTeilnehmer() {
		if (this.getUserKorp() == "A" ){
			console.log(this.getUserKorp())
			
			return collectionData(collection(this.afs,'Teilnehmer') );
		}else {
			return collectionData(collection(this.afs,'Teilnehmer')) ;
		
		
		}
		
	}

	@Injectable({
		providedIn: 'root'
	})



getTeilnehmerid(id: BigInteger) {
			return  docData(doc(this.afs, 'Teilnehmer/' + id))
			
		
		
		
	}
	updateLaufzettel(data,id) {
		data.completed = true;
		data.lastWriteTime = new Date();	
			updateDoc(doc(this.afs, 'Teilnehmer',id),data);
			
	}
	}
	 
	