import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import {  OnDestroy,  VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, merge, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { OfflineService } from '../shared/offline.service';



@Component({
  selector: 'app-startnrsel',
  templateUrl: './startnrsel.component.html',
  styleUrls: ['./startnrsel.component.scss']
})


export class StartnrselComponent implements OnInit {
	form!: UntypedFormGroup;
	startnr :string = "";
	Startnummerfehlt: boolean = false;
	notfound!: any;
	networkStatus: boolean = true;

  constructor(private router: Router , private fb: UntypedFormBuilder ,public of: OfflineService,private route: ActivatedRoute ){ }
  
  
 
  ngOnInit(): void {
	this.route.paramMap.subscribe(params => { 
	this.notfound = params.get('notfound');});
	this.form = this.fb.group({ startnr: [null] })  
	this.of.checkNetworkStatus()
	
	
  	
	}
	
	onSubmit(){
	
    if (this.startnr) {
		this.router.navigateByUrl('/laufzettel/'  + this.startnr);
	} else {		
    	this.Startnummerfehlt = true;
	}
	}

	
	getList(){
	
    
	this.router.navigateByUrl('/list'  );
	}

}

