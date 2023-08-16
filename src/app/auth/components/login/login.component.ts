import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Icon } from "@fortawesome/fontawesome-svg-core";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { AuthService } from "../../services/auth.service";
import { User } from "../../interfaces/user";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordIcon!:Icon;
  eye = faEye;
  eyeClosed =faEyeSlash
  userInfo:{} = {}
  defaultUserName:string = 'mor_2314'
  defaultPassword:string = '83r5^_'
  constructor(
    private router:Router,
    private service:AuthService
    ){}
  ngOnInit(): void {

  }
  onLogin(form:NgForm){
    this.userInfo = form.value;
    this.setUserData(this.userInfo);
    console.log(this.userInfo);

    this.service.userLogin(this.userInfo).pipe().subscribe({
      next:((data)=>{
        console.log(data);
      }),
      error:((err)=>{
        console.error(err.message)
      }),
      complete:(()=>{})
    })
    this.router.navigate(['/products']);
  }

  getUserData(){}
  setUserData(data:{}){
    localStorage.setItem('userData',JSON.stringify(data))
  }

  showPassword(){
  }
}
