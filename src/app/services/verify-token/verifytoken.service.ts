import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { VerifyToken } from '../../config/tokenverify.config';

@Injectable()
export class VerifytokenService {

  constructor(private http : Http) { }

  verifyToken(token) {
    return this.http.get(VerifyToken.verifytoken_api+token)
      .map(data => data.json(),
        error => this.handleError(error)
      )
  }

  private handleError(error) {
    console.log("Logging the error occured in the service");
  }

}
