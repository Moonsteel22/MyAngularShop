import { NgForm } from '@angular/forms';
import { Component, EventEmitter, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import {User} from '../userinterface'
import { Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userauthorization',
  templateUrl: './userauthorization.component.html',
  styleUrls: ['./userauthorization.component.css']
})
export class UserauthorizationComponent implements OnInit {

  constructor(private authorization: UserService,private router:Router) { }
  User!:User;
  email!:string;
  password!:string;
  @Output() isEntered=new EventEmitter();
  ngOnInit(): void {
  }
 
  isEnteredAccount!:boolean;
  
  signin(form:NgForm){
    this.authorization.authorization(new User('1','1','1',form.value.password,123,123,form.value.email,new Date())).subscribe(
      (data:any)=>{alert(data[0]['message']); if(data[0]['code']==2){ this.parsing(data);console.log(data)} })
      
  }
  parsing(data:any){
      this.User=new User(data['name'],data['surname'],data['login'],data['password'],data['phone'],data['age'],data['email'],
      data['date'])
      this.authorization.User=this.User;
      this.router.navigate(['']);
      document.getElementById('EnterButton')!.style.visibility="hidden";
      document.getElementById('RegistButton')!.style.visibility="hidden";
      document.getElementById('UserButton')!.style.visibility="visible";
  }
  }
