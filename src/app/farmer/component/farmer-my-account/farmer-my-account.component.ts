//import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { FarmerHeaderService } from '../../services/farmer-header/farmer-header.service';
import { Farmer } from './farmer';

@Component({
  selector: 'app-farmer-my-account',
  templateUrl: './farmer-my-account.component.html',
  styleUrls: ['./farmer-my-account.component.css'],
  providers:[FarmerHeaderService]
})
export class FarmerMyAccountComponent implements OnInit {

   public searchedFarmerId: string="KKDFARM1000";
   public farmerPhoto:string;
   public farmerId: string
   public farmerName : string;
   public farmerPincode: number;
   public farmerAddressLine: string;
   public farmerCity: string;
   public farmerDistrict: string;
   public farmerState: string;
   public farmerPrimary: boolean;
   public farmerAlternatePincode: number;
   public farmerAlternateAddressLine: string;
   public farmerAlternateCity: string;
   public farmerAlternateDistrict: string;
   public farmerAlternateState: string;
   public farmerAlternatePrimary: boolean;
   public farmerMobileNumber : string;
   public farmerAlternateNumber:number;

   public delete:boolean=false;
   public currentPassword:string;
   public newPassword:string;
   public reenterNewPassword:string;
   IsHidden= true;
   farmer : Farmer={
    addressLine:"grain market",
    city: "kaithal",
    district: "kaithal",    
    state: "haryana",
    pincode:136026, 
    primary:false
   };

   constructor(private farmerHeaderService : FarmerHeaderService,
              ) {
                this.delete=false;
               }

  // Function to get farmer details by his KKDId and make service call to get farmer details from app
  searchFarmer(){
    this.farmerHeaderService.getFarmerName(this.searchedFarmerId)
    .subscribe((res) =>{
      this.farmerPhoto=res.aadhaarData.photoUrl;
      this.farmerId=res.kkdFarmId;
      this.farmerName=res.aadhaarData.firstName;
      this.farmerPincode=res.aadhaarData.permanentAddress.pincode;
      this.farmerAddressLine=res.aadhaarData.permanentAddress.addressLine;
      this.farmerCity=res.aadhaarData.permanentAddress.city;
      this.farmerDistrict=res.aadhaarData.permanentAddress.district;
      this.farmerState=res.aadhaarData.permanentAddress.state;
      this.farmerPrimary=res.aadhaarData.permanentAddress.primary;
      this.farmerMobileNumber=res.mobileNo;
     },(error) =>{

    });
  }

  onSelect(){
  this.IsHidden= !this.IsHidden;
  }
  /* Function to update farmer's alternate address by his KKDId
  and make service call to update farmer's alternate address from app */
  updateFarmerAddress(){
    this.farmer.addressLine=this.farmerAlternateAddressLine;
    this.farmer.city=this.farmerAlternateCity;
    this.farmer.district=this.farmerAlternateDistrict;
    this.farmer.state=this.farmerAlternateState;
    this.farmer.pincode=this.farmerAlternatePincode;
    this.farmer.primary=true;
    if(this.farmer.addressLine==null || this.farmer.city==null || this.farmer.district==null
      || this.farmer.state==null || this.farmer.pincode==null){
        alert("please Enter Required Fields");
        }else{
    this.farmerHeaderService.updateFarmerAddress(this.farmerMobileNumber, this.farmer)
    .subscribe((res)=>{
      
    },(error)=>{
    });
  }
  }
  /* Function to update farmer's mobile number by his KKDId
  and make service call to update farmer's mobile number from app */
  updateFarmerMobile(){
    this.farmerHeaderService.getFarmerName(this.searchedFarmerId)
             .subscribe((res) =>{
                   res.alternateNo = this.farmerAlternateNumber;
                   this.farmerHeaderService.updateFarmerMobile(this.farmerId,res)
                   .subscribe((updatedInfo) =>{
              
                     }, (error) =>{

                     });            
             }, (error) =>{

             });
  }
//  /* Function to change farmer's password by his KKDId
//   and make service call to change farmer's password from app */
//   resetPassword(){
//     if(this.newPassword == this.reenterNewPassword)
//     {
//        this.farmerHeaderService.getFarmerName(this.searchedFarmerId)
//              .subscribe((res) =>{
//              if(this.currentPassword == res.password){
//                    res.password = this.newPassword;
//                    this.farmerHeaderService.updateFarmerMobile(this.farmerId ,res )
//                    .subscribe((updatedInfo) =>{
//                      if(this.newPassword == updatedInfo.password){
//                        alert("Password changed successfully");
//                      }
//                      }, (error) =>{

//                      })
//              }else{
//                alert("Incorrect current password");
//              }
//              }, (error) =>{

//              })
//           }
//     else{
//       alert("Re-enter the new password correctly");
//     }
//   }
  ngOnInit() {
    this.searchFarmer();
  }
}
