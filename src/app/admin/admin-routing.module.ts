import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'listing', component:ListingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

