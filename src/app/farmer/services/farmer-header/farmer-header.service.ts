import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { App } from '../../config/app.config';

@Injectable()
export class FarmerHeaderService {
  constructor(private http : Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

   // Function to get farmer's details
   getFarmerName(gotFarmerName) {
    return this.http.get(App.nameMapping+gotFarmerName)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   // Function to update farmer's address 
   updateFarmerAddress(mobileNo,updatedInfo){
    return this.http.put(App.alternateAddressMapping+mobileNo,updatedInfo,{headers: this.headers})
    .map(data => data.json(),
    (error: any)=>this.handleError(error));
    }
   // Function to update farmer's mobile number
    updateFarmerMobile(searchedFarmer,updatedInfo){
      return this.http.put(App.alternateMobileMapping+searchedFarmer,updatedInfo,{headers: this.headers})
      .map(data => data.json(),
      (error: any)=>this.handleError(error));
    }
     // Function to delete farmer's profile
     deleteFarmerProfile(searchedFarmer){
      return this.http.delete(App.deleteProfileMapping+searchedFarmer)
      .map(data => data.json(),
      (error: any)=>this.handleError(error));
    }
   // Function to handle errors
    private handleError(error: Response){
      return Observable.throw(error.statusText);
    }
}
