import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  token:string = '';
  userData:{}={};
  constructor() {}
  getToken(){

  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: request.headers.set('authorization','Token')
    })
    // console.log('Test from interceptor');
    // if(localStorage.getItem('userData')){
    //   console.log(0)
    //   this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    //   // this.token = this.userData?.token;
    // } else {
    //   console.log('No token');
    // }
    return next.handle(request);
  }
}
