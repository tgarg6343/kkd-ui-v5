import { Component, OnInit, Input } from "@angular/core";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-customer-my-cart",
  templateUrl: "./customer-my-cart.component.html",
  styleUrls: ["./customer-my-cart.component.css"],
  providers: [CartService]
})
export class CustomerMyCartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  public items = [];
  x: number;

  @Input() kkdCustId:string;

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.kkdCustId="KKDCUST1000";
    this.cartService.getCartItems(this.kkdCustId).subscribe(
      res => {
        this.items = res;
        this.x = this.items.reduce(function(sum, cartItem) {
          return sum + cartItem.productPrice * cartItem.quantity;
        }, 0);
      },
      error => console.log(error)
    );
  }

  deleteItem(item, ind) {
    this.cartService.deleteCartItem(item).subscribe(
      res => {
        console.log("deleting");
        this.getCartItems();
      },
      err => console.log(err)
    );
  }
  orders = [];
  convertOrder() {
    this.orders = this.items.map(ele => {
      let d=new Date();
      ele["kkdCustId"]=ele.custId;
      ele["kkdFarmId"]=ele.kkkdFarmID;
      ele["orderId"] = "ORDER101";
      ele["name"]="xyz";
      ele["farmerStatus"] = "active";
      ele["orderPlacing"] = d.getFullYear()+'-0'+(d.getMonth()+1)+'-'+d.getDate();
      ele["mobileNo"] = "9993894794";
      ele["transactionId"] = "COD";
      ele["totalAmount"] = ele.quantity*ele.productPrice;
      ele["orderStatus"]="received";
      ele["orderType"] = "bulk";
      ele["otp"] = "5799";
      ele["otpVerified"] = false;
      this.cartService
        .postOrder(ele)
        .subscribe(res => console.log(ele), err => console.log("error" + err));
    });
  }

  checkout() {
    this.convertOrder();
  }
}
