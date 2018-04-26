import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './component/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './component/customer-register/customer-register.component';
import { CustomerMyAccountComponent } from './component/customer-my-account/customer-my-account.component';
import { CustomerMyCartComponent } from './component/customer-my-cart/customer-my-cart.component';
import { CustomerHomePageComponent } from './component/customer-home-page/customer-home-page.component';
import { CustomerAddressBookComponent } from './component/customer-my-account/customer-address-book/customer-address-book.component';
import { CustomerBankDetailsComponent } from './component/customer-my-account/customer-bank-details/customer-bank-details.component';
import { CustomerCurrentOrderComponent } from './component/customer-my-account/customer-current-order/customer-current-order.component';
import { CustomerPreviousOrderComponent } from './component/customer-my-account/customer-previous-order/customer-previous-order.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component'


const routes: Routes = [
    { path:'customer/login',component:CustomerLoginComponent },
    { path:'customer/register',component:CustomerRegisterComponent },
    { path:'customer/myCart',component:CustomerMyCartComponent },
    { path:'customer/homePage',component:CustomerHomePageComponent },
    { path:'customer/myAccount',component:CustomerMyAccountComponent },
    { path:'customer/addressBook',component:CustomerAddressBookComponent },
    { path:'customer/bankDetails',component:CustomerBankDetailsComponent },
    { path:'customer/currentOrder',component:CustomerCurrentOrderComponent },
    { path:'customer/previousOrder',component:CustomerPreviousOrderComponent },

    { path:'customer/forgetPassword',component:ForgetPasswordComponent},

  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports : [ RouterModule ],
})
export class CustomerRoutingModule { }
