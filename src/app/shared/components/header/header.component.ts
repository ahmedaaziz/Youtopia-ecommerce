import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { SharedStoreService } from "../../services/shared-store.service";
import { SharedServiceService } from "../../services/shared-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  cartProducts:any[] = [];
  cartLength:number = 0;
  constructor(
    private _sharedStore:SharedStoreService,
    private sharedService:SharedServiceService
  ){

  }
@HostBinding('class.nav-opened') navbarOpened = false;
  navMobileToggle(){
    console.log('clicked');
    this.navbarOpened = !this.navbarOpened
    console.log(this.navbarOpened);
  }
  ngOnInit(): void {
    this.getCartLength()
  }
  getCartLength(){
    this._sharedStore.getCurrentCarteLength().subscribe((length:number)=>{
      if(!length){
        if('cart' in localStorage) {
          this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
          this.cartLength = this.cartProducts.length;
          this._sharedStore.setCarteLength(this.cartLength)
        }
        return;
      }
      this.cartLength = length;

    })
  }

}
