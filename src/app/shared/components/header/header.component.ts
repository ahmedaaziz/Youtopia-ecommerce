import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  cartProducts:any[] = [];
  cartLength:number = 0;
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
    if('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      this.cartLength = this.cartProducts.length;
    }
  }

}
