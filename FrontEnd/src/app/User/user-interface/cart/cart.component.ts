import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  ProductList:any;

  constructor(private UserService:UserService) {

  }
  ngOnInit(): void {
    this.ProductList=this.UserService.cartList;
  }
  clearCart(){

  }
}
