import { NgForm } from '@angular/forms';

import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css'],
})
export class ProductitemComponent implements OnInit{
  @Input() Name:string  = "";
  @Input() Id:number =0;
  @Input() Amount:number=0;
  @Input() Price:number =0;
  @Input() Image:string="";
  @Input() Cart:string="visible";
  Sum:number =0;
  plusone(){
    this.Amount++;
  }
  minusone(){
    if(this.Amount>0)
      this.Amount--;
  }
  constructor() { }
  inCart(){
    if(document.getElementById('EnterButton')!.style.visibility=='hidden'){
      
    }
    else{alert('Авторизуйтесь!');}
  }
  ngOnInit(): void {
    document.getElementById('CartButton')!.style.visibility=this.Cart;
  }
 

}
