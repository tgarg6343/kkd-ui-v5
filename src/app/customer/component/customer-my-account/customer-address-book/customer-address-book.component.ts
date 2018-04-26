import { Component, OnInit } from '@angular/core';
import {CustomerAuthenticationService} from '../../../services/customer-authentication.service';
@Component({
  selector: 'app-customer-address-book',
  templateUrl: './customer-address-book.component.html',
  styleUrls: ['./customer-address-book.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerAddressBookComponent implements OnInit {
  details:any[];
  constructor(private customerAuthenticationService : CustomerAuthenticationService) { }
  handleSuccess(data){
this.details=data.addresses;
console.log(data.addresses);
  }
searchDetails(){
  return this.customerAuthenticationService.getDetails().subscribe(
    data => this.handleSuccess(data),
    error=> console.log(error),
    () => console.log("Done")
  )
}
  
  ngOnInit() {
    this.searchDetails();
  }

}
