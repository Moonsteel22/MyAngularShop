import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {User} from './userinterface'
@Injectable({providedIn:'root'})
export class UserService implements OnInit{
    public User!:User;
    public cartList:any;
    constructor( private HttpClient:HttpClient){

    }
    registration(User:User){
      let header = new HttpHeaders({
         'Content-Type': 'application/json',
         'X-CSRFToken':'sometokenhihihi'});
       const body={login:User.login,email:User.email,password:User.password,name:User.name,surname:User.surname,phone:User.phone,
                     age:User.age,date:User.date}
       return this.HttpClient.post('http://127.0.0.1:8000/registration',body,{headers:header})
    }

    authorization(User:User){
     
        let header = new HttpHeaders({
           'Content-Type': 'application/json',
           'X-CSRFToken':'sometokenhihihi'});
         const body={email:User.email,password:User.password}
         return this.HttpClient.post('http://127.0.0.1:8000/authorization',body,{headers:header})
      
    }
    getUser(){
      return this.User;
    }
    getProductList(){
      return this.cartList;
    }
    toBDProduct(data:any){
      console.log(data)
      let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-CSRFToken':'sometokenhihihi'});
      return this.HttpClient.post('http://127.0.0.1:8000/addproduct',data,{headers:header})
    }
    ngOnInit(): void {
        
    }
}