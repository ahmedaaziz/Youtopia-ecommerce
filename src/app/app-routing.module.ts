import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from "./products/components/all-products/all-products.component";
import { LoginComponent } from "./auth/components/login/login.component";
import { ProductDetailComponent } from "./products/components/product-detail/product-detail.component";

const routes: Routes = [
  {
    path:'',
    component:AllProductsComponent,
  },

  {
    path:'products',
    component:AllProductsComponent
  },
  {
    component:ProductDetailComponent,
    path:'products/details/:id'
  },
  {
  component:LoginComponent,
  path:'login'
  },
  {
    path:'**',
    redirectTo:'products',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
