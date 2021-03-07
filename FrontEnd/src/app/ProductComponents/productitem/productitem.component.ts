
import { PDService } from './../ProductDeleteService.service';
import { NgForm } from '@angular/forms';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css'],
  providers:[PDService]
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
  constructor(private PDService:PDService,private router:Router) { }
  inCart(){
    if(document.getElementById('EnterButton')!.style.visibility=='hidden'){
      
    }
    else{alert('Авторизуйтесь!');}
  }
  deleteTovar(){
      this.PDService.delete(this.Id).subscribe((data:any)=>{alert(data[0]['message']);if(data[0]['code']==1){location.reload()}})
  }
  ngOnInit(): void {
    document.getElementById('CartButton')!.style.visibility=this.Cart;
  }
 

}
