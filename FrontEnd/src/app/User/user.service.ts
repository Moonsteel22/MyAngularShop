import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {User} from './userinterface'
import {Observable} from 'rxjs'
@Injectable({providedIn:'root'})
export class UserService implements OnInit{
    public User!:User;
    public cartList:any;
    // Тут храним данные о пользователе
    data=sessionStorage.user ? JSON.parse(sessionStorage.user) : undefined ;
    public isLogged:boolean=sessionStorage.user;
    constructor( private HttpClient:HttpClient,private router:Router){
      
    }
    // Общий комментарий: для выполнения post запросов отправляются заголовки header
    // Метод для выполнения запроса на сервер для регистрации ( добавление данных в БД )
    registration(User:User){
      let header = new HttpHeaders({
         'Content-Type': 'application/json',
         'X-CSRFToken':'sometokenhihihi'});
       const body={login:User.login,email:User.email,password:User.password,name:User.name,surname:User.surname,phone:User.phone,
                     age:User.age,date:User.date}
       return this.HttpClient.post('http://127.0.0.1:8000/registration',body,{headers:header})
    }
    // Метод для авторизации (получение данных о пользователе)
    authorization(Data:any){
     
        let header = new HttpHeaders({
           'Content-Type': 'application/json',
           'X-CSRFToken':'sometokenhihihi'});
         const body={email:Data['email'],password:Data['pass']}
         return this.HttpClient.post('http://127.0.0.1:8000/authorization',body,{headers:header})
      
    }
    // Метод для получения товаров для корзины по id пользователя
    getProductList(userID:number){
      return this.HttpClient.get('http://127.0.0.1:8000/cartProducts?userID='+userID)
    }
    // Метод для добавления продукта в базу данных ( в каталог )
    toBDProduct(data:any){

      let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-CSRFToken':'sometokenhihihi'});
      return this.HttpClient.post('http://127.0.0.1:8000/addproduct',data,{headers:header})
    }
    // метод для полного очищения корзины
    clearCart(userID:number){
      return this.HttpClient.get('http://127.0.0.1:8000/clearCart?userID='+userID)
    }
    // Здесь сразу определяем пользователя создав экземпляр класса User
    ngOnInit(): void {
      if(sessionStorage.user)
      this.User=new User(this.data['ID'],this.data['name'],
      this.data['surname'],this.data['login'],this.data['password'],this.data['phone'],this.data['age'],this.data['email'],
      this.data['date'],this.data['role'])
    }
    
}