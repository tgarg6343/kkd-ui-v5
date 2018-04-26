import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerLoginComponent } from './component/farmer-login/farmer-login.component';
import { FarmerRegisterComponent } from './component/farmer-authentication-authorization/farmer-register/farmer-register.component';
import { FarmerDashboardComponent } from './component/farmer-dashboard/farmer-dashboard.component';
import { FarmerHeaderComponent } from './component/farmer-header/farmer-header.component';
import { FarmerMyAccountComponent } from './component/farmer-my-account/farmer-my-account.component';
import { FarmerAddProductComponent } from './component/farmer-dashboard/farmer-add-product/farmer-add-product.component';
import { FarmerBankDetailsComponent } from './component/farmer-dashboard/farmer-bank-details/farmer-bank-details.component';
import { FarmerCurrentOrderComponent } from './component/farmer-dashboard/farmer-current-order/farmer-current-order.component';
import { FarmerPreviousOrderComponent } from './component/farmer-dashboard/farmer-previous-order/farmer-previous-order.component';
import { FarmerViewProductComponent } from './component/farmer-dashboard/farmer-view-product/farmer-view-product.component';
import { FarmerComponent } from './farmer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AadhaarComponent } from './component/farmer-authentication-authorization/aadhaar/aadhaar.component';
import { FarmerAuthenticationAuthorizationComponent } from './component/farmer-authentication-authorization/farmer-authentication-authorization.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { FarmerCommonHeaderComponent } from './component/farmer-common-header/farmer-common-header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FarmerAddAddressComponent } from './component/farmer-my-account/farmer-add-address/farmer-add-address.component';
import { FarmerChangePasswordComponent } from './component/farmer-my-account/farmer-change-password/farmer-change-password.component';
import { FarmerAlternateMobileComponent } from './component/farmer-my-account/farmer-alternate-mobile/farmer-alternate-mobile.component';
import { FarmerDeleteProfileComponent } from './component/farmer-my-account/farmer-delete-profile/farmer-delete-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FarmerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],

  declarations: [FarmerLoginComponent, FarmerRegisterComponent,FarmerDashboardComponent, FarmerHeaderComponent, FarmerMyAccountComponent, FarmerAddProductComponent, FarmerBankDetailsComponent, FarmerCurrentOrderComponent, FarmerPreviousOrderComponent, FarmerViewProductComponent, FarmerComponent, AadhaarComponent, FarmerAuthenticationAuthorizationComponent, ForgetPasswordComponent,FarmerCommonHeaderComponent, FarmerAddAddressComponent, FarmerChangePasswordComponent, FarmerAlternateMobileComponent, FarmerDeleteProfileComponent],

})
export class FarmerModule { }
