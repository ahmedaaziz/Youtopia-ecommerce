import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  url:string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(this.url)
  }

  getProductById(id:number){
    return this.http.get(this.url+id)
  }

  getAllCategories(){
    return this.http.get(`${this.url}/categories`)
  }
}
