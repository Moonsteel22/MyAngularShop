import { NgForm } from '@angular/forms';
import { Component, EventEmitter, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import {User} from '../userinterface'
import { Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userauthorization',
  templateUrl: './userauthorization.component.html',
  styleUrls: ['./userauthorization.component.css']
})
export class UserauthorizationComponent implements OnInit {

  constructor(private authorization: UserService,private router:Router) { }
  email!:string;
  password!:string;
  @Output() isEntered=new EventEmitter();
  ngOnInit(): void {
  }
 
  isEnteredAccount!:boolean;
  
  // Метод вызывает метод из Сервиса для выполнения запроса на получение данных о пользователе по Майлу и Паролю
  signin(form:NgForm){
    this.authorization.authorization({'pass':form.value.password,'email':form.value.email}).subscribe(
      (data:any)=>{alert(data[0]['message']); if(data[0]['code']==2){ this.parsing(data[0]['data']);} })
      
  }
  // Метод для парса информации о пользователе и создании объекта User с полученными параметрами
  parsing(data:any){
      this.authorization.User=new User(data['pk'],data['Name'],data['Surname'],data['login'],data['Password'],data['phone'],data['age'],data['Email'],
      data['date'],data['role'])
      sessionStorage.setItem('user',JSON.stringify(this.authorization.User))
      this.authorization.isLogged=true;
      this.router.navigate(['']);
    
  }
  }
