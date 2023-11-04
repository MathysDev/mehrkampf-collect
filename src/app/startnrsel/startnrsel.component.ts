import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, FormsModule , ReactiveFormsModule } from '@angular/forms';
import { LaufzettelService } from "../shared/laufzettel.service";




@Component({
  selector: 'app-startnrsel',
  templateUrl: './startnrsel.component.html',
  styleUrls: ['./startnrsel.component.scss']
})


export class StartnrselComponent implements OnInit {
	form!: FormGroup;
	startnr :string = "";
	Startnummerfehlt: boolean = false;
  constructor(private router: Router , private fb: FormBuilder , private ls: LaufzettelService){ }


  ngOnInit(): void {
	
	this.form = this.fb.group({ startnr: [null] })  
	
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

