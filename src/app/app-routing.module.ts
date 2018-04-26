import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './shared/body/body.component';
import { SearchResultComponent } from './home-page/search-result/search-result.component';
import { HelpComponent } from './shared/help/help.component';
import { SupportComponent } from './shared/support/support.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { PoliciesComponent } from './shared/policies/policies.component';
import { ConnectUsComponent } from './shared/connect-us/connect-us.component';
import { AppComponent } from './app.component';
import { FarmerComponent } from './farmer/farmer.component';
import { CustomerComponent } from './customer/customer.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component:HomePageComponent },
    { path: 'body', component:BodyComponent },
    { path: 'connect', component:ConnectUsComponent  },
    { path: 'policies', component:PoliciesComponent  },
    { path: 'help', component:HelpComponent  },
    { path: 'about', component:AboutUsComponent  },
    { path: 'connect', component:ConnectUsComponent  },
    { path: 'search/home', component:SearchResultComponent },
    { path: 'support', component:SupportComponent },
    { path: 'farmer', component:FarmerComponent },
    { path: 'customer', component:CustomerComponent },

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
