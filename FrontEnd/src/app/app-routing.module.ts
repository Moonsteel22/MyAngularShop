import { UserGuard } from './User/user.guard';
import { AddProductComponent } from './User/user-interface/add-product/add-product.component';
import { UserInterfaceComponent } from './User/user-interface/user-interface.component';
import { ProductComponentList } from './ProductComponents/Product-list/product.component';
import { UserComponent } from './User/userRegistration/user.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserauthorizationComponent } from './User/userauthorization/userauthorization.component';
import { OrderComponent } from './User/user-interface/order/order.component';

const routes: Routes = [
  {path:'toorder',component:OrderComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'user',component:UserInterfaceComponent,canActivate:[UserGuard]},
  {path:'userCart',component: UserInterfaceComponent},
  { path: 'login', component: UserauthorizationComponent},
  {path:'registration',component:UserComponent},
  {path:'',component: ProductComponentList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[UserGuard]
})
export class AppRoutingModule { }
