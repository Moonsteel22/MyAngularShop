import { User } from './../../User/userinterface';
import { UserService } from './../../User/user.service';

import { PDCService } from '../ProductService.service';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css'],
  providers:[PDCService]
})
export class ProductitemComponent implements OnInit{
  @Input() Name:string  = "";
  @Input() Id!:number;
  @Input() Amount:number=0;
  @Input() Price:number =0;
  @Input() Image:string="";
  @Input() Cart:string="visible";
  DeleteButton:boolean=this.UserService.isAuthorized;
  DeleteFromCartButton=window.location.href.search('user')>0;
  CartButton=window.location.href.search('user')==-1;
  Sum:number =0;
  plusone(){
    this.Amount++;
  }
  minusone(){
    if(this.Amount>0)
      this.Amount--;
  }
  constructor(private PDService:PDCService,private router:Router,private UserService:UserService) { }
  inCart(){
    if(!this.UserService.isAuthorized){
        alert('Авторизуйтесь!')
    }
    else{
        this.PDService.inCart(this.Id).subscribe((data:any)=>alert(data[0]['message']))
    }
  }
  deleteTovar(){
      this.PDService.delete(this.Id).subscribe((data:any)=>{alert(data[0]['message']); if(data[0]['code']==1){location.reload()}})
  }
  deletefromcart(){
     this.PDService.fromcart(this.Id).subscribe((data:any)=>{alert(data[0]['message']); if(data[0]['code']==1){}})

  }
  ngOnInit(): void {
  }
 

}
