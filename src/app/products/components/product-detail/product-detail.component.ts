import { HttpClient } from "@angular/common/http";
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
  constructor(
    private productService:ProductsServiceService,
    private route:ActivatedRoute,
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
}
