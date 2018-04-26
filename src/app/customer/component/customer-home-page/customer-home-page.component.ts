import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-customer-home-page',
  templateUrl: './customer-home-page.component.html',
  styleUrls: ['./customer-home-page.component.css'],
  providers:[SearchService]
})
export class CustomerHomePageComponent implements OnInit {
  public p:number;
  public searchInput:string;
  public products:Array<any>=[];
  constructor(private searchService: SearchService) { }
  ngOnInit() {
    this.searchService.getAllProducts(this.searchInput).subscribe((data)=> {
      console.log(data);
      this.products=data;
    },
    (err)=> console.log("in component"+err));
  }

  sorters = {
    byPrice: function(firstProduct, secondProduct) {
      return firstProduct.price - secondProduct.price;
    },
    byQuantity: function(firstProduct, secondProduct) {
      return firstProduct.quantity - secondProduct.quantity;
    },
    byDistance: function(firstProduct, secondProduct) {
      return firstProduct.distance - secondProduct.distance;
    },
    byPopularity: function(firstProduct, secondProduct) {
      // in reverse order by default
      return secondProduct.avgRating - firstProduct.avgRating;
    }
  };

  sortBy(x) {
    switch (x) {
      case "priceLH":
        this.products.sort(this.sorters.byPrice);
        break;

      case "priceHL":
        this.products.sort(this.sorters.byPrice);
        this.products.reverse();
        break;

      case "quantityLH":
        this.products.sort(this.sorters.byQuantity);
        break;

      case "quantityHL":
        this.products.sort(this.sorters.byQuantity);
        this.products.reverse();
        break;

      case "distance":
        this.products.sort(this.sorters.byDistance);
        break;

      case "popularity":
        this.products.sort(this.sorters.byPopularity);
        this.products.reverse();
        break;
    }
  }

  searchProduct(){
    this.searchService.getAllProducts(this.searchInput).subscribe((data)=> {
      console.log(data);
      this.products=data;
    },
    (err)=> {
      console.log("in component"+err),
      this.products=[];
    });
  }
  myOnFinishPrice(event){
    this.searchService.getAllProducts(this.searchInput).subscribe((data)=> {
      console.log(data);
      this.products=data.filter((product)=>product.price>=event.from&& product.price<=event.to);
    },
    (err)=> console.log("in component"+err));
    console.log("from:"+event.from+"  to:"+event.to);
  }
  myOnFinishQuantity(event){
    this.searchService.getAllProducts(this.searchInput).subscribe((data)=> {
      console.log(data);
      this.products=data.filter((product)=>product.price>=event.from&& product.price<=event.to);
    },
    (err)=> console.log("in component"+err));
    console.log("from:"+event.from+"  to:"+event.to);
  }
  public cartItem={};
  public enteredQuant:number;
  addToCart(item){
    this.cartItem={
      "custId":"KKDCUST1000",
      "kkdFarmID":item.kkdFarmId,
      "productName":item.productName,
      "productPrice":item.price,
      "farmerName":"Ram Singh",
      "quantity":item.quantity,
      "productId":"KKDPROD101",
      "avgRating": 4.5
    };
    console.log(this.cartItem)
  }

  proceed(){
    console.log("original"+this.cartItem["quantity"]);
    console.log("gduehdfikej"+this.enteredQuant);
    if(this.cartItem["quantity"]>this.enteredQuant){
      console.log(this.enteredQuant);
      this.cartItem["quantity"]=this.enteredQuant;
    this.searchService.addToCart(this.cartItem).subscribe((data)=>{
      alert("added to bag")
    },err=> console.log(err));
    }
    else{
      alert("No stocks Available for this much Qunatity")
    }
    
  }
}
