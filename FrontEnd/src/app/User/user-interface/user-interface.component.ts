import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {
  isAuthorized:boolean=false;
  constructor() { }
  ProductList=[{Name:'asd',Amount:10,Price:20,Sum:200,ID:2,Image:""}]
  ngOnInit(): void {
  }
  exitClick(){
    document.getElementById('RegistButton')!.style.visibility='visible';
    document.getElementById('EnterButton')!.style.visibility='visible';
    document.getElementById('UserButton')!.style.visibility='hidden';
  }
}
