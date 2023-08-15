import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from "../../services/products-service.service";
import { from } from "rxjs";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{
  products:any;
  categories:any;
  isLoading:boolean = false;
  constructor(private productService:ProductsServiceService){}
  products$ = from(this.productService.getAllProducts());
  categories$ = from(this.productService.getAllCategories());
  favorite = faHeart;
  up = faChevronUp;
  down = faChevronDown;


  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){
    this.isLoading = true;
    this.products$.pipe().subscribe({
      next:((response)=>{
        console.log(response)
        this.products = response;
        this.isLoading = false;
      }),
      error:((err)=>{
        console.error(err.message)
      }),
      complete:(()=>{})
    })
  }

  getCategories(){
    this.categories$.pipe().subscribe({
      next:((data)=>{
        console.log(data)
        this.categories = data
      }),
      error:((err)=>{
        console.log(err.message)
      }),
      complete:(()=>{})
    })
  }
}
