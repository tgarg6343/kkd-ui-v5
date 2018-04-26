import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-authentication-authorization',
  templateUrl: './farmer-authentication-authorization.component.html',
  styleUrls: ['./farmer-authentication-authorization.component.css']
})
export class FarmerAuthenticationAuthorizationComponent implements OnInit {
  
	aadhaarData:any;
	constructor() { }

	ngOnInit() {
	}

	getAadhaarData(event) {
		this.aadhaarData = event.aadhaarData;
	}
}
