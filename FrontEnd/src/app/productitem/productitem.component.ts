
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css'],
})
export class ProductitemComponent{
  @Input() Name:string  = "";
  @Input() Id:number =0;
  @Input() Amount:number=0;
  @Input() Price:number =0;
  @Input() Image:string=""
  Sum:number =0;
  plusone(){
    this.Amount++;
  }
  minusone(){
    if(this.Amount>0)
      this.Amount--;
  }
  constructor() { }
 

}
