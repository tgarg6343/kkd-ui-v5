import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IssueSubmission } from '../config/issue.config';

@Injectable()
export class SupportService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  addNewIssue(isueSubmission){
    return this.http.post(IssueSubmission.issuedetail_api, isueSubmission , {headers: this.headers})
		.map(data => data.json(),
      (error: any)=>this.handleError(error));
  }

  private handleError(error: Response){
		return Observable.throw(error.statusText);

}
}
