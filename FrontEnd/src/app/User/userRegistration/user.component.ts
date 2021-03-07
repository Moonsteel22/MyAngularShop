import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import {User} from '../userinterface'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
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

  constructor(private reg:UserService) { }

  registration(form:NgForm) : void{
      
      // this.reg.registration(form.value.login)
      this.reg.registration(new User(form.value.name,form.value.surname,form.value.login,form.value.password,
        form.value.phone,form.value.age,form.value.email,new Date())).subscribe((data:any)=>alert(data[0]['message']))
      
  }
  ngOnInit(): void {
  }
}
