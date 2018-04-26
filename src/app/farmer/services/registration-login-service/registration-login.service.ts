import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RegistrationLogin } from '../../config/RegistrationLogin.config';

@Injectable()
export class RegistrationLoginService {

	constructor(private http : Http) { }
	private headers = new Headers({ 'Content-Type': 'application/json'});

	addFarmer(farmerToRegister) {
		return this.http.post(RegistrationLogin.registration_api, farmerToRegister, {headers: this.headers})
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	loginFarmer(farmerCredentials) {
		return this.http.post(RegistrationLogin.login_api, farmerCredentials, {headers: this.headers})
		.map(data => data.json(),
			(error: any)=>this.handleError(error));

	}

	forgetPassword(farmerNewCredentials) {
		debugger
		return this.http.put(RegistrationLogin.forgetpassword_api,farmerNewCredentials, {headers: this.headers})
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	addhaarData(aadhaarNo) {
		return this.http.get(RegistrationLogin.aadhaar_api+aadhaarNo)
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	generateOtp(mobileNo) {
		return this.http.get(RegistrationLogin.otp_generate+mobileNo)
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	verifyOtp(otpData) {
		return this.http.post(RegistrationLogin.otp_verify,otpData, {headers: this.headers})
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	private handleError(error: Response){
		return Observable.throw(error.statusText);
	}

}
