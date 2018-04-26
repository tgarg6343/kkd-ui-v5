 import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 import { CustomerHeaderService } from '../../services/customer-header.service';


@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css'],
  providers:[CustomerHeaderService]
})
export class CustomerHeaderComponent implements OnInit {

  @Output() success = new EventEmitter<any>();
 	public searchedCustomer: string="KKDCUST2000";
 	public customerName : string;


   constructor(private customerHeaderService : CustomerHeaderService) { }

  ngOnInit() {
    this.searchCustomer();
  }

  // Function to get customer name and make service call to get customer name from app
   searchCustomer(){
   	this.customerHeaderService.searchCustomer(this.searchedCustomer)
   	.subscribe((res) =>{
       this.customerName=res.firstName;
    	},(error) =>{

   	});
   }
 }
