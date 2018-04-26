import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {App} from './app.config';

@Injectable()
export class ProductService {

  
  constructor(private http: Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }    


  update(id,product){
       return this.http.post(App.nameMapping+id,product,{headers: this.headers})
        .map(data => data.json(),
       (error: any)=>this.handleError(error)); 
      }

}
