
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
  isAuthorized:boolean=false;
  User!:User;
  data:any;
  CartShowing:boolean=false;
  AddShowing:boolean=false;
  CatalogShowing:boolean=false;
  ExistShowing:boolean=false;
  constructor(private router:Router,private UserService:UserService) {
    if(sessionStorage.user){
    this.data=JSON.parse(sessionStorage.user);
    this.User=new User(this.data['ID'],this.data['name'],this.data['surname'],this.data['login'],this.data['password'],this.data['phone'],this.data['age'],this.data['email'],
      this.data['date'])
    }
    else{
      alert("Авторизуйтесь!")
      this.router.navigate([''])
    }
   }
  ngOnInit(): void {
    if(sessionStorage.user){
      this.UserService.getProductList(JSON.parse(sessionStorage.user)['ID']).subscribe((data:any)=>this.UserService.cartList=data[0]['data']);
      this.router.navigate(['/user'])
    }
    else{
      alert('Авторизуйтесь!'); 
      this.router.navigate([''])
    }
  }
  switchOff(){
    this.CartShowing=false;
    this.CatalogShowing=false;
    this.AddShowing=false;
  }
  
  
}
