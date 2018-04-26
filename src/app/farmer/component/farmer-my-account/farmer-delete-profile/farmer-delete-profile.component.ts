import { Component, OnInit } from '@angular/core';
import { FarmerHeaderService } from '../../../services/farmer-header/farmer-header.service';

@Component({
  selector: 'app-farmer-delete-profile',
  templateUrl: './farmer-delete-profile.component.html',
  styleUrls: ['./farmer-delete-profile.component.css'],
  providers:[FarmerHeaderService]
})
export class FarmerDeleteProfileComponent implements OnInit {

  public searchedFarmerId: string="KKDFARM1000";
  public currentPassword:string;
  public delete:boolean;
  constructor(private farmerHeaderService : FarmerHeaderService) { }

  /* Function to delete farmer's profile by his KKDId
  and make service call to delete farmer's profile from app */
  deleteFarmerProfile(){
    this.farmerHeaderService.getFarmerName(this.searchedFarmerId)
    .subscribe((res) =>{
      if(this.currentPassword == res.password){
        this.delete=true;
        this.deletingProfile();
      } else{
        alert("Incorrect current password");
      }     
     },(error) =>{

    });  
  }
  deletingProfile(){
    if(this.delete==true){
      this.farmerHeaderService.deleteFarmerProfile(this.searchedFarmerId).subscribe((data)=>{
      },(err)=> console.log(err));
    }
  }

  ngOnInit() {
  }
}
