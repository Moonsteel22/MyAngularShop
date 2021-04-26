import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class productService{
    constructor(private http:HttpClient){};
    // Данный сервис нужен только для получения продуктов в каталог на главной странице
    getProduct(){
        return this.http.get("http://127.0.0.1:8000/products");
    }
} 