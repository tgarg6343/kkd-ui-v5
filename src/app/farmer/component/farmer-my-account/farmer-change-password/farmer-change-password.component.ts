import { Component, OnInit } from '@angular/core';
import { FarmerHeaderService } from '../../../services/farmer-header/farmer-header.service';

@Component({
  selector: 'app-farmer-change-password',
  templateUrl: './farmer-change-password.component.html',
  styleUrls: ['./farmer-change-password.component.css'],
  providers:[FarmerHeaderService]
})
export class FarmerChangePasswordComponent implements OnInit {
 
  public searchedFarmerId: string="KKDFARM1000";
  public newPassword:string;
  public reenterNewPassword:string;
  public currentPassword:string;
  public farmerId: string

  constructor(private farmerHeaderService : FarmerHeaderService) { }

  /* Function to change farmer's password by his KKDId
  and make service call to change farmer's password from app */
  resetPassword(){
    if(this.newPassword == this.reenterNewPassword)
    {
       this.farmerHeaderService.getFarmerName(this.searchedFarmerId)
             .subscribe((res) =>{
             if(this.currentPassword == res.password){
                   res.password = this.newPassword;
                   this.farmerHeaderService.updateFarmerMobile(this.farmerId ,res )
                   .subscribe((updatedInfo) =>{
                     if(this.newPassword == updatedInfo.password){
                       alert("Password changed successfully");
                     }
                     }, (error) =>{

                     })
             }else{
               alert("Incorrect current password");
             }
             }, (error) =>{

             })
          }
    else{
      alert("Re-enter the new password correctly");
    }
  }

  ngOnInit() {
  }

}
