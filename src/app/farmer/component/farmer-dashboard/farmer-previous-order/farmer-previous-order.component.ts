import { Component, OnInit } from '@angular/core';

import { OrderService } from '../../../services/order-service/order.service';

@Component({
  selector: 'app-farmer-previous-order',
  templateUrl: './farmer-previous-order.component.html',
  styleUrls: ['./farmer-previous-order.component.css'],
  providers:[OrderService]
})

export class FarmerPreviousOrderComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  public orderList=[];

  ngOnInit() {
    //code to get the list of orders according to farmer id
    this.orderService.getPreviousOrderListFromFarmerId("kkdfarm1001").subscribe((res) =>{
      this.orderList = res;
      console.log(this.orderList);
    }, (error) =>{})
  }

}
