import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order-service/order.service';

@Component({
  selector: 'app-farmer-current-order',
  templateUrl: './farmer-current-order.component.html',
  styleUrls: ['./farmer-current-order.component.css'],
  providers:[OrderService]
})
export class FarmerCurrentOrderComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  public orderList=[];
  public date:Date;
  public time:Date;
  public orderId:any="";
  public declineReason:any;
  public otp:any;
  public otpAuto:any;
  public otpVerified:Boolean=false;
  public avgRating:any;


  ngOnInit() {
    let d=new Date();
    //this.date=d.getFullYear()+'-0'+(d.getMonth()+1)+'-'+d.getDate();
    this.date=d;
    //code to get the list of orders according to farmer id
    this.orderService.getCurrentOrderListFromFarmerId("kkdfarm1001").subscribe((res) =>{
      this.orderList = res;
    }, (error) =>{})
  }

  //updating delivery details of order id
  public setDeliveryDetails(){
    var updateValues={
      'orderId':this.orderId,
      'expectedTime':this.time,
      'expectedDate':this.date,
      'farmerStatus':"Accept",
    }
    this.orderService.updateDeliveryDetails(updateValues).subscribe((res) =>{
    }, (error) =>{})
  }

  //setting orderId for particular order
  public setData(orderId){
    this.orderId=orderId;

  }

  //Checking otp for particular order
  public setDataOtp(orderId,otp){
    this.orderId=orderId;
    this.otpAuto=otp;
  }

  //setting decline reason in order Details
  public setDeclineReason(){
    var updatedReason={
      'orderId':this.orderId,
      'orderDeclineReason':this.declineReason,
      'farmerStatus':"Decline",
      'orderStatus':"Cancelled",
      'orderType':"Previous",
    }
    this.orderService.updateDeclineReason(updatedReason).subscribe((res) =>{
    }, (error) =>{})
  }

  //checking OTP For order delivery
  public checkingOtp(){
  console.log(this.otpAuto+" "+this.otp);
    if(this.otpAuto==this.otp){
      this.otpVerified=true;
    }else{
      alert("wrong OTP entered");
    }
  }

  //Rating the customer
  public rateCustomer(){
    this.otpStatus();
    console.log(this.avgRating);
  }

  //Updating the Otp Status
  public otpStatus(){
    console.log(this.otpVerified);
  }

}
