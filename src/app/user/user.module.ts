import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ListingComponent } from './listing/listing.component';

console.warn("user module");

@NgModule({
  declarations: [
    LoginComponent,
    ListingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
