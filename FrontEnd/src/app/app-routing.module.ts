import { AddProductComponent } from './User/add-product/add-product.component';
import { UserInterfaceComponent } from './User/user-interface/user-interface.component';
import { ProductComponentList } from './Product-list/product.component';
import { UserComponent } from './User/userRegistration/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserauthorizationComponent } from './User/userauthorization/userauthorization.component';

const routes: Routes = [
  {path:'addproduct',component:AddProductComponent},
  {path:'user',component:UserInterfaceComponent},
  {path:'userCart',component: UserInterfaceComponent},
  { path: 'login', component: UserauthorizationComponent},
  {path:'registration',component:UserComponent},
  {path:'',component: ProductComponentList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
