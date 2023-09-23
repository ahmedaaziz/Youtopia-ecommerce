import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from "../../services/products-service.service";
import { from, map } from "rxjs";
import { Product } from "../../interfaces/product";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{
  products:Product[] = [];
  categories:any;
  isLoading:boolean = false;
  filteredPrices:any[] = [];

  constructor(
    private productService:ProductsServiceService,
    ){}
  categories$ = from(this.productService.getAllCategories());


  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){
    this.isLoading = true;
    this.productService.getAllProducts().pipe().subscribe({
      next:((response:Product[])=>{
        this.products = response;
        this.isLoading = false;
      }),
      error:((err)=>{
        console.error(err.message);
      }),
      complete:(()=>{})
    });
  }

  getCategories(){
    this.categories$.pipe().subscribe({
      next:((data)=>{
        this.categories = data;
      }),
      error:((err)=>{
        console.error(err.message);
      }),
      complete:(()=>{})
    });
  }
  filterProducts(value:string){
    this.isLoading = true;
  }


  sortProductByRating(sortingCase:string){

    if(sortingCase === 'rating_asc') {
    console.log( this.products.sort((a:any,b:any) => a.rating.rate - b.rating.rate));
    this.products = this.products.sort((a:any,b:any) => a.rating.rate - b.rating.rate);

    } else if (sortingCase === 'rating_desc') {
   console.log( this.products.sort((a:any,b:any) => b.rating.rate - a.rating.rate));
    this.products = this.products.sort((a:any,b:any) => b.rating.rate - a.rating.rate);
    }
  }


  sortProductByPrice(sortingCase:string){
    if(sortingCase === 'price_asc') {
    console.log( this.products.sort((a:any,b:any) => a.price - b.price));
    this.products = this.products.sort((a:any,b:any) => a.price - b.price);

    } else if (sortingCase === 'price_desc') {
   console.log( this.products.sort((a:any,b:any) => b.price - a.price));
    this.products = this.products.sort((a:any,b:any) => b.price - a.price);
    }
  }

  sortProduct(event:any){
    let value = event.target.value;
    console.log(value);
    this.isLoading = true;
    switch (value) {
      case 'All':
      this.getProducts();
      this.isLoading = false;

      break;

      case 'price_asc':
      console.log('price entered >>',value);
      this.sortProductByPrice('price_asc');
      this.isLoading = false;
      break;

      case 'price_desc':
      console.log('price entered >>',value);
      this.sortProductByPrice('price_desc');
      this.isLoading = false;
      break;

      case 'rating_asc':
      console.log('clicked');
      this.sortProductByRating('rating_asc');
      this.isLoading = false;

      break;

      case 'rating_desc':
      console.log('clicked');
      this.sortProductByRating('rating_desc');
      this.isLoading = false;

      break;

      default:
      break;
    }
    // (value === 'All' ? this.getProducts():this.filterProducts(value))
  }

  tempArr:[]=[];
  newArr:[] = [];

  filterPrice(event:any){
    let value = event.target.value;
    let result;

    switch (value) {
      case '100-300':
        this.getProducts();
         result = this.products.filter((product)=> product.price >= 100 && product.price <=300);
         this.products = result;
         console.log(this.products);

         break;
      case '200-400':
        this.getProducts();
        result = this.products.filter((product)=> product.price >= 200 && product.price <=400);
         this.products = result;

        break;
      case '300-500':
         result = this.products.filter((product)=> product.price >= 300 && product.price <= 500);
         this.products = result;

        break;
      case '400-600':
          result = this.products.filter((product)=> product.price >= 400 && product.price <= 600);
         this.products = result;

        break;
      case '600-800':
        result = this.products.filter((product)=> product.price >= 600 && product.price <= 800);
        this.products = result;
        break;
      default:
        break;
    }
  }
  filteredCategories:any[] = [];
  filterProductsByCategory(event:any){
    let category = event.target.value;
    let id = event.target.id;
    if(event.target.checked){
      console.log('checked');
      console.log(id);
      console.log(category);
      this.isLoading = true;
      this.productService.getProductsByCategory(category).pipe().subscribe({
        next:(res=>{
          console.log(res);
          // this.filteredCategories.push(res)
          // console.log(this.filteredCategories);
          this.products = res;
        }),
        error:(error=>{
          console.error(error.message);
        }),
        complete:(()=>{
          this.isLoading = false;
        })
    });

    } else {
      this.getProducts();

    }
  }
}
