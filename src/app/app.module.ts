import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home-page/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './shared/body/body.component';
import { SearchResultComponent } from './home-page/search-result/search-result.component';
import { SearchResultListComponent } from './home-page/search-result/search-result-list/search-result-list.component';
import { HelpComponent } from './shared/help/help.component';
import { SupportComponent } from './shared/support/support.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { PoliciesComponent } from './shared/policies/policies.component';
import { ConnectUsComponent } from './shared/connect-us/connect-us.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { FarmerModule } from './farmer/farmer.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonHeaderComponent } from './shared/common-header/common-header.component';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  BodyComponent,
  SearchResultComponent,
  SearchResultListComponent,
  HelpComponent,
  SupportComponent,
  AboutUsComponent,
  PoliciesComponent,
  ConnectUsComponent,
  HomePageComponent,
  CommonHeaderComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  CustomerModule,
  FarmerModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  NgxPaginationModule,
],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
