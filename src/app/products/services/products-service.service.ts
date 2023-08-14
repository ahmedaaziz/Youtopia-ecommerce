import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(environment.baseUrl+'v1/products')
  }

  getProductById(id:number){
    return this.http.get(`${environment.baseUrl}+'v1/products'${id}`)
  }
}
