import { Component, OnInit } from '@angular/core';
import { LaufzettelService } from "../shared/laufzettel.service";
import { Router } from '@angular/router';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-laufzettel-list',
  templateUrl: './laufzettel-list.component.html',
  styleUrls: ['./laufzettel-list.component.scss']
})
export class LaufzettelListComponent implements OnInit {
	
  constructor(private auth: AuthService,private laufzettelService: LaufzettelService, private router: Router) { }

ngOnInit() {
	if (!this.auth.isLoggedIn) {
		console.log('not logged in');
		this.router.navigateByUrl('/login');
		return; // Exit the method here
	} else {
		console.log('logged in');
		this.getTeilnehmer();
	}
	
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
