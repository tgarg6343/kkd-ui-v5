import { Component, OnInit } from '@angular/core';
import { FarmerViewProductService } from '../../../services/farmer-view-product/farmer-view-product.service'
import { viewProductServiceUrl } from '../../../config/viewProductServiceUrl.config';

@Component({
  selector: 'app-farmer-view-product',
  templateUrl: './farmer-view-product.component.html',
  styleUrls: ['./farmer-view-product.component.css'],
  providers: [FarmerViewProductService]
})
export class FarmerViewProductComponent implements OnInit {

  constructor(private farmerViewProductService : FarmerViewProductService) { }

  public products : any = [];
  public productId : any;
  public id : any;

  public getProducts() {
    this.farmerViewProductService.getAllProducts(viewProductServiceUrl.viewProductUrl).subscribe((res)=>{
      this.products=res;
    },error=>this.handleError(error))
  }

  public saveId(id : any) {
    this.productId = id;
    //alert(this.productId);
  }

  public deleteProduct() {
    //alert("here****");
    this.farmerViewProductService.deleteParticularProduct(viewProductServiceUrl.deleteProductUrl+this.productId).subscribe((res)=>{
      this.ngOnInit();
    },error=>this.handleError(error))
  }

  public updateId(id : any) {
    this.id = id;
  }
 
  ngOnInit() {

    this.getProducts();
  }

  private handleError(error) {
		console.log("Logging the error occured in the service");
  }
  
}
