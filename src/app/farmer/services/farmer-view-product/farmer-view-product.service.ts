import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FarmerViewProductService {

  constructor(private http: Http) { }

  public getAllProducts(url : any) {
    return this.http.get(url)
    .map(data => data.json(),
      error => this.handleError(error)
    )
  }

  public deleteParticularProduct(url : any) {
    //alert(url);
      return this.http.delete(url)
      .map(data => data.status,
        error => this.handleError(error)
      )
  }

  private handleError(error) {
    console.log("Logging the error occured in the service");
  }

}
