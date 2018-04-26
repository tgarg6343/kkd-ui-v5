import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoginRegistration } from '../config/LoginRegistration.config';


@Injectable()
export class RegistrationLoginService {

	constructor(private http : Http) { }
	private headers = new Headers({ 'Content-Type': 'application/json'});

	addCustomer(customerToRegister) {
		return this.http.post(LoginRegistration.registration_api, customerToRegister, {headers: this.headers})
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	loginCustomer(customerCredentials) {
		return this.http.post(LoginRegistration.login_api, customerCredentials, {headers: this.headers})
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	forgetPassword(customerCredentials) {
		return this.http.put(LoginRegistration.forgetpassword_api,customerCredentials, {headers: this.headers})
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	generateOtp(mobileNo) {
		return this.http.get(LoginRegistration.otp_generate+mobileNo)
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	verifyOtp(otpData) {
		return this.http.post(LoginRegistration.otp_verify,otpData, {headers: this.headers})
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	private handleError(error: Response){
		return Observable.throw(error.statusText);
	}
}
