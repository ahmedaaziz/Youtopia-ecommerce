import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable } from "rxjs";
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  url:string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url+'products')
  }

  getProductById(id:number):Observable<Product[]>{
    return this.http.get<Product[]>(this.url+'products/'+id)
  }

  getAllCategories(){
    return this.http.get(`${this.url}products/categories`)
  }

  getProductsByCategory(category:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}products/category/${category}`)
  }
}
