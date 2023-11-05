import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LaufzettelService } from "../shared/laufzettel.service";
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import {UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-laufzettel',
  templateUrl: './laufzettel.component.html',
  styleUrls: ['./laufzettel.component.scss']
})

 
export class LaufzettelComponent implements OnInit {
id !: any;
public Laufzettelform : UntypedFormGroup;
  constructor(public laufzettelService: LaufzettelService, private route: ActivatedRoute, private router: Router) {
this.Laufzettelform = laufzettelService.form	  }
Teilnehmer;
StartNr: string = "";
  ngOnInit() { 
  
    //const id = this.route.snapshot.queryParamMap.get('id');
    //console.log(id); // Pepperoni
	this.route.paramMap.subscribe(params => { 
    //this.laufzettelService.form.value.Teilnehmer = this.laufzettelService.getTeilnehmerid( params.get('id')); 
	//this.laufzettelService.getTeilnehmerid( params.get('id')).then(data=>console.log(data));
	//this.laufzettelService.getTeilnehmerid( params.get('id')).then(data=> this.Teilnehmer);
	this.id = params.get('id');
	this.Teilnehmer = [];
	//this.laufzettelService.getTeilnehmerid(this.id).subscribe(res=>(this.Teilnehmer = res));
	this.laufzettelService.getTeilnehmerid( params.get('id')).then(res=> (this.Teilnehmer = res),
	
	);
	
	
});
console.log( this.id);

  }
  
  
	 onSubmit() {
		this.laufzettelService.updateLaufzettel(this.Teilnehmer,this.id)
		this.router.navigateByUrl('/start'  );
	
  }
  cancel() {
	  this.router.navigateByUrl('/start'  );
  }
  onKeyPress(event: any) {
    const regexpNumber = /[0-9\,\.\ ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }

}