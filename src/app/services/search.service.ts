import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  // public dummyData : any = [
  //   {
  //     kkdCustId: "KKDCUST1001",
  //     kkdFarmId: "KKDFARM1001",
  //     orderId: "KKDORDER1001",
  //     rating: 5,
  //     review: "This is the review"
  //   },
  //   {
  //     kkdCustId: "KKDCUST1002",
  //     kkdFarmId: "KKDFARM1002",
  //     orderId: "KKDORDER1002",
  //     rating: 5,
  //     review: "This is the review"
  //   },
  //   {
  //     kkdCustId: "KKDCUST1003",
  //     kkdFarmId: "KKDFARM1003",
  //     orderId: "KKDORDER1003",
  //     rating: 5,
  //     review: "This is the review"
  //   },
  //   {
  //     kkdCustId: "KKDCUST1004",
  //     kkdFarmId: "KKDFARM1004",
  //     orderId: "KKDORDER1004",
  //     rating: 5,
  //     review: "This is the review"
  //   }
  // ];

  searchItem(url) {
    console.log(url)
    return this.http.get(url)
      .map(data => data.json(),
        error => this.handleError(error)
      )
  }

  private handleError(error) {
    console.log("Logging the error occured in the service");
  }

}
