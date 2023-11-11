import { Component, OnInit } from '@angular/core';
import { LaufzettelService } from "../shared/laufzettel.service";

import { Router } from '@angular/router';

@Component({
  selector: 'app-laufzettel-list',
  templateUrl: './laufzettel-list.component.html',
  styleUrls: ['./laufzettel-list.component.scss']
})
export class LaufzettelListComponent implements OnInit {
	
  constructor(private laufzettelService: LaufzettelService, private router: Router) { }

  ngOnInit()  {
	
	  this.getTeilnehmer();
	  }
	Teilnehmer;
	Korp = this.laufzettelService.getUserKorp();
	
	getTeilnehmer = () =>
		
			this.laufzettelService
			.getTeilnehmer()
			.subscribe(res =>( this.Teilnehmer = res ));
		
	editTeiln(Teiln) {
		this.router.navigateByUrl('/laufzettel/'  + Teiln.StartNr + '/1');
	
	}		
}
