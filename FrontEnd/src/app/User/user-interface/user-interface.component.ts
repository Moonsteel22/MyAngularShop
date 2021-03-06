import { User } from './../userinterface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {
  isAuthorized:boolean=false;
  User!:User;
  constructor(private router:Router) { }
  ProductList=[{Name:'asd',Amount:10,Price:20,Sum:200,ID:2,Image:""}]
  ngOnInit(): void {
    if(document.getElementById('EnterButton')!.style.visibility=='hidden'){
      this.router.navigate(['/user'])
    }
    else{
      alert('Авторизуйтесь!'); 
      this.router.navigate([''])
    }
  }
  exitClick(){
    document.getElementById('RegistButton')!.style.visibility='visible';
    document.getElementById('EnterButton')!.style.visibility='visible';
    document.getElementById('UserButton')!.style.visibility='hidden';
  }
}
