import { UserService } from '../../user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private user:UserService) { }
  // данный метод добавляет новый товар в базу данных
  addProduct(form:NgForm){
    const imgPath=form.value.ProductImg.substr(12);
    const toSend={imgPath:imgPath,name:form.value.ProductName,description:form.value.ProductDescription,price:form.value.ProductPrice,
      amount:form.value.ProductAmount,producer:form.value.ProductMaker,date:new Date()}
    this.user.toBDProduct(toSend).subscribe((data:any)=>alert(data[0]['message']));
  }
  ngOnInit(): void {
  }

}
