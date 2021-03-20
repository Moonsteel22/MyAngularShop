
import { UserService } from './../user.service';
import { User } from './../userinterface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],

})
export class UserInterfaceComponent implements OnInit {
  isAuthorized:boolean=false;
  User!:User;
  data:any;
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
  ProductList:any;
  ngOnInit(): void {
    console.log(sessionStorage.user)
    if(sessionStorage.user){
      this.UserService.getProductList(this.User.ID).subscribe((data:any)=>this.ProductList=data[0]['data']);
      this.router.navigate(['/user'])
    }
    else{
      alert('Авторизуйтесь!'); 
      this.router.navigate([''])
    }
  }
  exitClick(){
    sessionStorage.removeItem('user');
    this.UserService.isLogged=false;
  }
  
}
