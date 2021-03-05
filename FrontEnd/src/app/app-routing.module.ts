import { ProductComponentList } from './Product-list/product.component';
import { UserComponent } from './userRegistration/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserauthorizationComponent } from './userauthorization/userauthorization.component';

const routes: Routes = [
  { path: 'login', component: UserauthorizationComponent},
  {path:'registration',component:UserComponent},
  {path:'',component: ProductComponentList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
