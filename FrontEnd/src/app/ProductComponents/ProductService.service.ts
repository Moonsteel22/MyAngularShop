import { UserService } from './../User/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class PDCService{
    constructor(private httpClient:HttpClient,private UIC:UserService){}
    header = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-CSRFToken':'sometokenhihihi'});
    delete(ID:number){
        
          return this.httpClient.post('http://127.0.0.1:8000/deleteProduct',{ID:ID},{headers:this.header})
    }
    inCart(pid:any){
        const userID=this.UIC.User.ID;
        return this.httpClient.post('http://127.0.0.1:8000/addtocart',{PhoneID:pid,UserID:userID},{headers:this.header})
    }
    fromcart(pid:number){
        return this.httpClient.get('http://127.0.0.1:8000/deletefromcart?phoneid='+pid+'&userid='+this.UIC.User.ID)
    }
}