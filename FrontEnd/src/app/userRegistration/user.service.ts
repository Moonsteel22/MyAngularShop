import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {User} from './userinterface'
@Injectable({providedIn:'root'})
export class UserAuthorization implements OnInit{
    constructor( private HttpClient:HttpClient){

    }
    sign_in(User:User){
       return this.HttpClient.post('http://128.0.0.1:8000/login',User)
    }

    registration(User:User){
       return this.HttpClient.post('http://128.0.0.1:8000/register',User)
    }

    ngOnInit(): void {
        
    }
}