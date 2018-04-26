import { Component, OnInit } from '@angular/core';
import {CustomerAuthenticationService} from '../../../services/customer-authentication.service'

@Component({
  selector: 'app-customer-previous-order',
  templateUrl: './customer-previous-order.component.html',
  styleUrls: ['./customer-previous-order.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerPreviousOrderComponent implements OnInit {

  public customerId : string ;
  public previousOrders : any = [];
   constructor(private customerAuthenticationService : CustomerAuthenticationService) { }

   getdata(){
   this.customerAuthenticationService.getPreviousOrders(this.customerId).subscribe(results=>{
     console.log(results)
   this.previousOrders=results;
   },error=> {
     console.log(error);
   });
 }
   ngOnInit() {
    this.customerId = CustomerAuthenticationService.cus;
     this.getdata();

   }}
