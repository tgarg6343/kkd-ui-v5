import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import{CustomerAuthenticationService} from '../../services/customer-authentication.service';
import{UserDetails} from '../../config/user-details.config';
@Component({
  selector: 'app-customer-my-account',
  templateUrl: './customer-my-account.component.html',
  styleUrls: ['./customer-my-account.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerMyAccountComponent implements OnInit {
  public mobileNumber:string="";
  public currentPassword: string="";
  public newPassword: string="";
  public reenterNewPassword: string="";
  public userDetails ={};
 
  constructor(private customerAuthenticationService :CustomerAuthenticationService) { }

  ngOnInit() {
    this.customerAuthenticationService.changeCustomerId('kkdcust3001');
    //localStorage.getItem("kkdCustId");
  }
  
  
  
  onSubmit(){
    
   
    var regularExpression  = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!(isNaN(+this.mobileNumber)) && this.mobileNumber.length==10 ){
    if(this.currentPassword.length && this.newPassword.length && this.reenterNewPassword.length ){
    if(regularExpression.test(this.newPassword)){
      if(this.newPassword == this.reenterNewPassword)
    {
    
      this.customerAuthenticationService.getUserDetails(this.mobileNumber)
            .subscribe((res) =>{this.userDetails = res;
            if(!(res == null)){
            if(this.currentPassword == res.password){
                  res.password = this.newPassword;
                  this.customerAuthenticationService.updatePassword(res.kkdCustId ,res )
                  .subscribe((updatedInfo) =>{
                    if(this.newPassword == updatedInfo.password){
                      alert("Password changed successfully");
                    }
                    
                    }, (error) =>{
                      alert ("Mobile number not registered");
                    })
            }else{
              alert("Incorrect current password");
            }}else{
              alert ("Mobile number not registered");
            }
            }, (error) =>{
            alert ("Mobile number not registered");
            })
          }
    else{
      alert("Re-enter the new password correctly");
    }}
    else{
      alert("New password must contain at least one number and one uppercase"+ 
      "and one lowercase and one special case, and at least 8 or more characters");
    }}
    else{
      alert("Please fill all the fields");
    }}
    else{
      alert("Enter a valid mobile number");
    }
  }
  

  validateUser(){
    if(!(isNaN(+this.mobileNumber)) && this.mobileNumber.length==10 ){
    if(this.currentPassword.length){
    this.customerAuthenticationService.getUserDetails(this.mobileNumber)
    .subscribe((res) =>{this.userDetails = res;
    //console.log(res.password);
    if(!(res == null)){
    if(this.currentPassword == res.password){
      this.customerAuthenticationService.deleteProfile(res.kkdCustId)
            .subscribe((status) =>{
               alert("Profile deleted successfully");
        
        }, (error) =>{
    
        })
      }
      else{
        alert("Incorrect Password");
      }}else{
        alert ("Mobile number not registered");
      }
    })
  }else{
    alert ("Password field cannot be empty");
  }}else{
    alert("Enter a valid mobile number");
  }
}}
