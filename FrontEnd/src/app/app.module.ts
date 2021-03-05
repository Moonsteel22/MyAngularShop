import { ProductComponentList } from './Product-list/product.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './userRegistration/user.component';
import { UserauthorizationComponent } from './userauthorization/userauthorization.component';

@NgModule({
  declarations: [
    AppComponent,ProductComponentList, ProductitemComponent, HeaderComponent, UserComponent, UserauthorizationComponent
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
