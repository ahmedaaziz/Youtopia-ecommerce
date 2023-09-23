import { SharedStoreService } from './../../../shared/services/shared-store.service';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from "../../services/products-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  id:any;
  isLoaded:boolean = false;
  productDetails:any;
 cartProducts:any[] = []
 amount:number = 0;
 cartLength!:number ;
 constructor(
    private productService:ProductsServiceService,
    private route:ActivatedRoute,
    private _sharedStore:SharedStoreService
  ){
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProduct(this.id);
  }

  getProduct(id:number){
    this.isLoaded = true;
    this.productService.getProductById(id).pipe().subscribe({
      next:((data)=>{
        console.log(data)
        this.productDetails = data
        this.isLoaded = false;

      }),
      error:((err)=>{
        console.error(err);
      }),
      complete:(()=>{})
    })
  }
  addToCart(event:any){
    console.log(event)
    if('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(cartProduct => cartProduct.item.id === event.id);
      console.log(exist)
      if(exist){
        console.log('product is existed');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart',JSON.stringify(this.cartProducts))
        this.cartLength = this.cartProducts.length;
        this._sharedStore.setCarteLength(this.cartLength)
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart',JSON.stringify(this.cartProducts)!);
      this._sharedStore.setCarteLength(this.cartLength)

    }
  }
}
