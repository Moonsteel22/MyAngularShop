import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userauthorization',
  templateUrl: './userauthorization.component.html',
  styleUrls: ['./userauthorization.component.css']
})
export class UserauthorizationComponent implements OnInit {

  constructor() { }
  form!:NgForm;
  login!:string;
  password!:string;
  ngOnInit(): void {
  }
  signin(){}

}
