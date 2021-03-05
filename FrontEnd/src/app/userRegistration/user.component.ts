import { UserRegistration } from './user.service';
import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import {User} from './userinterface'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserRegistration]
})
export class UserComponent implements OnInit {
  name!:string;
  surname!:string;
  login!:string;
  password!:string;
  phone!:number;
  age!:number;
  email!:string;
  date!:Date;
  isExist!:number;
  constructor(private reg:UserRegistration) { }

  registration(form:NgForm) : void{
      // this.reg.registration(form.value.login)
      this.reg.registration(new User(form.value.name,form.value.surname,form.value.login,form.value.password,
        form.value.phone,form.value.age,form.value.email,new Date())).subscribe((data:any)=>this.isExist=data.number)
  }
  ngOnInit(): void {
  }
}
