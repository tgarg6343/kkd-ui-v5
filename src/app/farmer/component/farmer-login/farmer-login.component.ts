import { Component, OnInit } from '@angular/core';
import { RegistrationLoginService } from '../../services/registration-login-service/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-farmer-login',
	templateUrl: './farmer-login.component.html',
	styleUrls: ['./farmer-login.component.css'],
	providers:[ RegistrationLoginService ]
})
export class FarmerLoginComponent implements OnInit {
	rForm: FormGroup;
	post:any;   
	mobileNo:String;
	password:String;
	newPassword:String;

	constructor(private registrationService: RegistrationLoginService,private fb: FormBuilder,public router: Router) { 
		this.rForm = fb.group({
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]
		});
	}

	ngOnInit() {
	}

	loginFarmer(post) {
		var farmerCredentials={
			'mobileNo':post.mobileNo,
			'password':post.password
		}

		this.registrationService.loginFarmer(farmerCredentials).subscribe((res) =>{
			alert("Successfully loggedin");
			localStorage.setItem("token",res.results.token);
			localStorage.setItem("kkdFarmId",res.results.kkdFarmId);
			this.router.navigate(['/farmer/dashboard']);
		}, (err) =>{
			if(err.status=401){
				alert("Invalid Credentials")
			}
			else{
				alert("Server down")
			}
		})
	}
}
