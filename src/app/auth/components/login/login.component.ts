import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Icon } from "@fortawesome/fontawesome-svg-core";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordIcon!:Icon;
  userInfo:{} = {};
  eye = faEye;
  eyeClosed =faEyeSlash

  constructor(){}
  ngOnInit(): void {

  }
  onLogin(form:NgForm){
    console.log(form);
  }
}
