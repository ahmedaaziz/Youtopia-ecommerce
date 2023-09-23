import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-bar',
  templateUrl: './cart-bar.component.html',
  styleUrls: ['./cart-bar.component.scss']
})
export class CartBarComponent implements OnInit{
cartProducts:any[] = [];
@Input() productDetails:any;
@Output() item = new EventEmitter();
amount:number = 1;
buttonDisabled:boolean = false;
ngOnInit(): void {
    this.checkIfProductInCart()
}
addProductToCart(button:any,word:string){
  button.textContent = word
  button.disabled = true;
  this.item.emit({item:this.productDetails,quantity:this.amount});
}

checkIfProductInCart(){
  if('cart' in localStorage) {
    this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    // console.log(this.cartProducts);
    // console.log(this.productDetails.id);
    let existed = this.cartProducts.find(item=>item.item.id === this.productDetails.id);
    if(existed){
       this.buttonDisabled = true;
    }

  }
}

}
