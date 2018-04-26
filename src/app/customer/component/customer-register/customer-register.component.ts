import { Component, OnInit,ViewChild} from '@angular/core';
import { RegistrationLoginService } from '../../../customer/registration-login-services/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-customer-register',
	templateUrl: './customer-register.component.html',
	styleUrls: ['./customer-register.component.css'],
	providers:[ RegistrationLoginService ]
})
export class CustomerRegisterComponent implements OnInit {
	@ViewChild('myModal') myModal;
	@ViewChild('myModal1') myModal1;
	rForm: FormGroup;
	post:any;   
	mobileNo:String;
	password:String;
	confirmPassword:String;
	hideVar:boolean=false;
	customerToRegister;
	otpForm: FormGroup;

	constructor(private registrationService: RegistrationLoginService,private fb: FormBuilder,public router: Router) {
		this.rForm = fb.group({
			'firstName':[null, Validators.compose([Validators.required, Validators.minLength(3)])],
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")])],
			'confirmPassword' : ['',[Validators.required]],
		},{validator: this.checkIfMatchingPasswords});

		this.otpForm = fb.group({
			'otp' : [null, Validators.required],
		});
	}

	ngOnInit() {
	}

	checkIfMatchingPasswords(group: FormGroup) {
		let passwordField= group.controls.password,
		confirmPasswordField = group.controls.confirmPassword;
		if(passwordField.value !== confirmPasswordField.value ) {
			return confirmPasswordField.setErrors({notEquivalent: true})
		}else {
			return confirmPasswordField.setErrors(null);
		}
	}

	sendOtp(post) {

		this.customerToRegister={
			'mobileNo':post.mobileNo,
			'password':post.password,
			'firstName':post.firstName,
			'lastName':post.lastName
		}
		this.mobileNo=post.mobileNo;
		this.hideVar=true;
		//call otp service to generate a otp corresponding to number
		this.registrationService.generateOtp(post.mobileNo).subscribe((res) =>{
			//sucessfully sended
		}, (err) =>{
			console.log(err);
		})
	}

	verifyOtp(post) {

		var otpData={
			'mobileNo':this.mobileNo,
			'otp':post.otp
		}
		this.registrationService.verifyOtp(otpData).subscribe((res) =>{
			//response will be true or false if true redirect to customer dashboard else invalid otp
			if(res==true){
				//save customer details to db
				this.registrationService.addCustomer(this.customerToRegister).subscribe((res) =>{
					localStorage.setItem("token",res.results.token);
					localStorage.setItem("kkdCustId",res.results.kkdCustId);
					this.router.navigate(['customer/homePage']);
				}, (err) =>{
						alert("Already registered")
				})
			}
			else{
				alert("wrong otp");
				this.myModal1.nativeElement.click();
			}
		}, (err) =>{
			alert("wrong otp");
	})}
}
