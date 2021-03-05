import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {User} from './userinterface'
@Injectable({providedIn:'root'})
export class UserRegistration implements OnInit{
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

    ngOnInit(): void {
        
    }
}