import { environment } from './../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = environment.baseUrl;
  isLogged:boolean = false;
  constructor(private http:HttpClient) {
    const token = localStorage.getItem('userData');
    this.isLogged = !!token;
   }

  userLogin(userData:any){
    return this.http.post(this.url+'auth/login',{userData})
  }
}
