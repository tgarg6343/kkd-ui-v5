import { Component, OnInit } from '@angular/core';
import { FarmerHeaderService } from '../../../services/farmer-header/farmer-header.service';
@Component({
  selector: 'app-farmer-add-address',
  templateUrl: './farmer-add-address.component.html',
  styleUrls: ['./farmer-add-address.component.css'],
  providers:[FarmerHeaderService]
})
export class FarmerAddAddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
