import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name!:string;
  surname!:string;
  login!:string;
  password!:string;
  phone!:number;
  age!:number;
  email!:string;
  form!: FormGroup;
  constructor() { }

  registration(){
    
  }
  ngOnInit(): void {
  }
  isExist(){

  }
}
