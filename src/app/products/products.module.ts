import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductComponent,
    ProductDetailComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class ProductsModule { }
