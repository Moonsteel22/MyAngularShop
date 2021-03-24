
import { ProductComponentList } from './ProductComponents/Product-list/product.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductitemComponent } from './ProductComponents/productitem/productitem.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './User/userRegistration/user.component';
import { UserauthorizationComponent } from './User/userauthorization/userauthorization.component';
import { UserInterfaceComponent } from './User/user-interface/user-interface.component';
import { AddProductComponent } from './User/user-interface/add-product/add-product.component';
import { CommonModule } from '@angular/common';
import { DeleteproductComponent } from './ProductComponents/deleteproduct/deleteproduct.component';

import { UsercatalogueComponent } from './User/user-interface/usercatalogue/usercatalogue.component';
import { CartComponent } from './User/user-interface/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,ProductComponentList, ProductitemComponent, HeaderComponent, UserComponent, UserauthorizationComponent, UserInterfaceComponent, AddProductComponent, DeleteproductComponent, CartComponent, UsercatalogueComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
