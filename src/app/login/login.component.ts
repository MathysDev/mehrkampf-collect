import { Component, OnInit } from '@angular/core';
import { NgAuthService } from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(
    public ngAuthService: NgAuthService
  ) { }

  ngOnInit() {
	 
	

	  }

}