import { User } from './../User/userinterface';
import { UserService } from './../User/user.service';

import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public UserService:UserService) { 
    
  }
  exitClick(){
    sessionStorage.removeItem('user');
    this.UserService.isLogged=false;
  }
  ngOnInit(): void {
    console.log(this.UserService.isLogged)
  }

}
