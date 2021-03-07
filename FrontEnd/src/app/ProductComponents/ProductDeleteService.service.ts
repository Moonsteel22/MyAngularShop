import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class PDService{
    constructor(private httpClient:HttpClient){}
    header = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-CSRFToken':'sometokenhihihi'});
    delete(ID:number){
        
          return this.httpClient.post('http://127.0.0.1:8000/deleteProduct',{ID:ID},{headers:this.header})
    }
    inCart(phone:any){
        console.log(phone);
        return this.httpClient.post('http://127.0.0.1:8000/addToCart',{ID:phone},{headers:this.header})
    }
}