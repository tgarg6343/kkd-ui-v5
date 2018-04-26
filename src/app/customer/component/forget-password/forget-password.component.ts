import { Component, OnInit } from '@angular/core';
import { RegistrationLoginService } from '../../registration-login-services/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-forget-password',
	templateUrl: './forget-password.component.html',
	styleUrls: ['./forget-password.component.css'],
	providers:[ RegistrationLoginService ]
})
export class ForgetPasswordComponent implements OnInit {

	newPasswordForm: FormGroup;
	numberForm: FormGroup;
	otpForm: FormGroup;
	post:any;   
	mobileNo:String;
	password:String;
	confirmPassword:String;
	hideVar:boolean=false;
	hideVar2:boolean=false;
	hideVar3:boolean=false;

	constructor(private registrationService: RegistrationLoginService,private fb: FormBuilder,public router: Router) { 
		this.newPasswordForm = fb.group({
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.maxLength(12), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")])],
			'confirmPassword' : ['',[Validators.required]],
		},{validator: this.checkIfMatchingPasswords});

		this.numberForm = fb.group({
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
		});

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
		this.mobileNo=post.mobileNo;
		this.hideVar=true;
		this.hideVar2=true;
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
						//call otp service to verify the otp if true then show update password card
						this.registrationService.verifyOtp(otpData).subscribe((res) =>{
			//response will be true or false if true move else error
			if(res==true){
				this.hideVar2=false;
				this.hideVar3=true;
			}
			else{
				alert("wrong otp")
			}
		}, (err) =>{
			if(err.status=401){
				alert("Invalid otp")
			}
			else{
				alert("Server down")
			}
		})
					}

					resetPasswordCustomer(post) {
						var customerNewCredentials={
							'mobileNo':this.mobileNo,
							'password':post.password,
						}

						this.registrationService.forgetPassword(customerNewCredentials).subscribe((res) =>{
							alert("Successfully changed");
							localStorage.setItem("token",res.results.token);
							localStorage.setItem("kkdFarmId",res.results.kkdFarmId);
							this.router.navigate(['/customer/homePage']);
						}, (err) =>{
							alert("conflict");
						})
					}
				}
