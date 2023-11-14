import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

import {  OnDestroy,  VERSION, AfterViewInit } from '@angular/core';



import { ActivatedRoute } from '@angular/router';
import { fromEvent, merge, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { OfflineService } from '../shared/offline.service';
import {    ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-startnrsel',
  templateUrl: './startnrsel.component.html',
  styleUrls: ['./startnrsel.component.scss']
})


export class StartnrselComponent implements OnInit, AfterViewInit  {
	form!: UntypedFormGroup;
	startnr :string = "";
	Startnummerfehlt: boolean = false;
	notfound!: any;
	networkStatus: boolean = true;

	@ViewChild("mystartnr") myStartnrField: ElementRef | undefined;
	
  constructor(private router: Router , private fb: UntypedFormBuilder ,public of: OfflineService,private route: ActivatedRoute ,private el: ElementRef){ }
  
	ngAfterViewInit() {
		console.log('loaded startnrsel');
		if (this.myStartnrField) {
			this.myStartnrField.nativeElement.focus();
		}
	}

	// ...

 
  ngOnInit(): void {
	this.route.paramMap.subscribe(params => { 

	this.notfound = params.get('notfound');

	
});
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

