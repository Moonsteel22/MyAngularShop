import { UserService } from './../User/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class PDCService{
    
    // Данный сервис осуществляет работу с товаром в корзине: добавление, удаление.

    constructor(private httpClient:HttpClient,private UIC:UserService){}

    header = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-CSRFToken':'sometokenhihihi'});
    // Удаление товара из корзины
    delete(ID:number){
        
          return this.httpClient.post('http://127.0.0.1:8000/deleteProduct',{ID:ID},{headers:this.header})
    }
    // Добавление товара в корзину
    inCart(pid:any){
        console.log(JSON.parse(sessionStorage.user)['ID'])
        return this.httpClient.post('http://127.0.0.1:8000/addtocart',{PhoneID:pid,UserID:JSON.parse(sessionStorage.user)['ID']},{headers:this.header})
    }
    fromcart(pid:number){
        return this.httpClient.get('http://127.0.0.1:8000/deletefromcart?phoneid='+pid+'&userid='+JSON.parse(sessionStorage.user)['ID'])
    }
}