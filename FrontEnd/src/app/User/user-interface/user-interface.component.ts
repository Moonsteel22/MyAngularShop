
import { UserService } from './../user.service';
import { User } from './../userinterface';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],

})
export class UserInterfaceComponent implements OnInit {

  User!:User; // Хранит информацию о пользователе
  data:any;
  CartPrice=0;
  CartElements=0;
  // Хранят, что нужно показать в текущий момент
  CartShowing:boolean=false;
  AddShowing:boolean=false;
  CatalogShowing:boolean=false;

  ExistShowing:boolean=false;
  constructor(private router:Router,private UserService:UserService) {
    // Если в сессиях есть пользователь - то получаем данные и все ок
    // Если нет - просим авторизоваться
    if(sessionStorage.user){
    this.data=JSON.parse(sessionStorage.user);
    this.User=new User(this.data['ID'],this.data['name'],this.data['surname'],this.data['login'],this.data['password'],this.data['phone'],this.data['age'],this.data['email'],
      this.data['date'],this.data['role'])
    }
    else{
      alert("Авторизуйтесь!")
      this.router.navigate([''])
    }
   }
   // Здесь получаем список продуктов в корзине и информацию об общей стоимости и кол-ве элементов в корзине
  ngOnInit(): void {
    
    if(sessionStorage.user){
      this.UserService.getProductList(JSON.parse(sessionStorage.user)['ID']).subscribe((data:any)=>{
        this.UserService.cartList=data[0]['data'];
        for(let i of data[0]['data']){
          this.CartElements+=1;
          this.CartPrice+=i['Price']*i['Amount'];
        }
        
      })
      this.router.navigate(['/user']);
    }
    else{
      alert('Авторизуйтесь!'); 
      this.router.navigate([''])
    }
  }
  // Эта функция нужна чтобы формы не пересекались при переключении
  switchOff(){
    this.CartShowing=false;
    this.CatalogShowing=false;
    this.AddShowing=false;
  }
  
  
}
