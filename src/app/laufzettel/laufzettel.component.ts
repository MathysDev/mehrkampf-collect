import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaufzettelService } from "../shared/laufzettel.service";
import { ActivatedRoute } from '@angular/router';
import {UntypedFormGroup } from '@angular/forms';
import { OfflineService } from '../shared/offline.service';

@Component({
  selector: 'app-laufzettel',
  templateUrl: './laufzettel.component.html',
  styleUrls: ['./laufzettel.component.scss']
})

 
export class LaufzettelComponent implements OnInit {
  id! : any
  list!: any 
public Laufzettelform : UntypedFormGroup;
  constructor(public laufzettelService: LaufzettelService, private route: ActivatedRoute, private router: Router,public of: OfflineService) {
this.Laufzettelform = laufzettelService.form	  }
Teilnehmer;

StartNr: string = "";
  ngOnInit() { 
  

this.route.paramMap.subscribe(params => { 
  this.id = params.get('id');
  this.list = params.get('list');
  this.Teilnehmer = [];
  if (this.id) {
    this.laufzettelService.getTeilnehmerid(this.id).subscribe(res => {
      if (res) {
        this.Teilnehmer = res;
      } else {
        console.error('No result found for Teilnehmer with id', this.id);
        this.router.navigateByUrl('start/'+this.id  );
      }
    });
  }
});
console.log(this.id);
console.log('Herkunft ist list',this.list)
  }
  
  
	 onSubmit() {
		this.laufzettelService.updateLaufzettel(this.Teilnehmer,this.id)

		if (this.list !== '1'){
	  this.router.navigateByUrl('/start'  );
    } else {
      this.router.navigateByUrl('/list'  );
    }
	
  }
  cancel() {
    console.log('Herkunft ist list',this.list)
    if (this.list !== '1'){
	  this.router.navigateByUrl('/start'  );
    } else {
      this.router.navigateByUrl('/list'  );
    }
  }
  onKeyPress(event: any) {
    const regexpNumber = /[0-9\,\.\ ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }
  start() {
    this.router.navigateByUrl('/start'  );
  }

}