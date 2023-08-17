import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FilterCategoryComponent } from './components/filter-category/filter-category.component';
import { FiterPricesComponent } from './components/filter-prices/filter-prices.component';
import { SortProductsComponent } from './components/sort-products/sort-products.component';
import { StarRatingModule } from 'angular-star-rating';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductComponent,
    ProductDetailComponent,
    FilterCategoryComponent,
    FiterPricesComponent,
    SortProductsComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    StarRatingModule.forRoot()
  ]
})
export class ProductsModule { }
