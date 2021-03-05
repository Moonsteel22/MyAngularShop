import { Component} from '@angular/core';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Hidden:boolean=true;
 
// addProduct(form:NgForm): void{
//   console.log(form.value)
//   let isExist=false;
//   for(let i=0;i<this.ProductsList.length;i++){
//     if(this.ProductsList[i].Name == form.value["ProductName"]){
//       isExist= true;
//       this.ProductsList[i].Amount+=form.value["ProductAmount"];
//       if(this.ProductsList[i].Amount<0){
//         this.ProductsList[i].Amount=0;
//       }
//       this.ProductsList[i].Price=form.value["ProductPrice"]>=0 ? form.value["ProductPrice"] : -1*form.value["ProductPrice"];
//       this.ProductsList[i].Sum=form.value["ProductPrice"]*this.ProductsList[i].Amount;
//       break;
//     }
//   }
//   if(!isExist)
//     this.ProductsList.push(new Tovar(form.value["ProductAmount"]>=0 ? form.value["ProductAmount"] : 0,form.value["ProductPrice"]>=0 ? form.value["ProductPrice"] : form.value["ProductPrice"]*-1,form.value["ProductPrice"]*form.value["ProductAmount"],form.value["ProductName"]))
// } 

  title='shop';
}
