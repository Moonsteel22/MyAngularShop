import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { productService } from './product.service';

@Component({
    selector:'Products-list',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css'],
    providers:[productService]
})

export class ProductComponentList implements OnInit{

    constructor(private productService:productService){}
    ngOnInit(): void {
        this.productService.getProduct().subscribe((data:any)=>{this.ProductList=data[0]['data'];console.log(this.ProductList)});
    }
    ProductList:any;
   dataReceived:boolean=false;
//    constructor(private httpService: HttpService){}
//     submit(user: User){
//         this.httpService.postData(user)
//                 .subscribe(
//                     (data: User) => {this.receivedUser=data; this.done=true;},
//                     error => console.log(error)
//                 );
//     }
   
// addProduct(form:NgForm): void{
// console.log(form.value)
// let isExist=false;
// for(let i=0;i<this.ProductsList.length;i++){
//   if(this.ProductsList[i].Name == form.value["ProductName"]){
//     isExist= true;
//     this.ProductsList[i].Amount+=form.value["ProductAmount"];
//     if(this.ProductsList[i].Amount<0){
//       this.ProductsList[i].Amount=0;
//     }
//     this.ProductsList[i].Price=form.value["ProductPrice"]>=0 ? form.value["ProductPrice"] : -1*form.value["ProductPrice"];
//     this.ProductsList[i].Sum=form.value["ProductPrice"]*this.ProductsList[i].Amount;
//     break;
//   }
// }
// if(!isExist)
//   this.ProductsList.push(new Tovar(form.value["ProductAmount"]>=0 ? form.value["ProductAmount"] : 0,form.value["ProductPrice"]>=0 ? form.value["ProductPrice"] : form.value["ProductPrice"]*-1,form.value["ProductPrice"]*form.value["ProductAmount"],form.value["ProductName"]))
// } 
// ProductsList=[new Tovar(0,200,0,"Samsung"),new Tovar(0,200,0,"Apple"),new Tovar(0,200,0,"Huawei")]
title='shop'; 
}