import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SortByComponent } from './components/sort-by/sort-by.component';
import { httpInterceptorsProviders } from "./interceptoprs";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SortByComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule

  ],
  exports:[
    HeaderComponent,
    SpinnerComponent

  ],

})
export class SharedModule { }
