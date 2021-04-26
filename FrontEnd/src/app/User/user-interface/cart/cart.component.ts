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
  // Метод для очищения корзины (удаляются данные из таблица Cart в бд по id пользователя)
  clear(){

    this.UserService.clearCart(JSON.parse(sessionStorage.user)['ID']).subscribe(
      (response:any)=>{
          alert('Код: '+response['code']+" Сообщение:"+response['message']);
          location.reload();
      }
    )
  }
  ngOnInit(): void {
    this.ProductList=this.UserService.cartList;
  }
  clearCart(){

  }
}
