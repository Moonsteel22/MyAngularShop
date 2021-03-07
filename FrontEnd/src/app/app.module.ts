import { PDService } from './ProductComponents/ProductDeleteService.service';
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
import { AddProductComponent } from './User/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,ProductComponentList, ProductitemComponent, HeaderComponent, UserComponent, UserauthorizationComponent, UserInterfaceComponent, AddProductComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
