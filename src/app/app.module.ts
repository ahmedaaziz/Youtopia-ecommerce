import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule,FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from "@angular/router";
import { ProductsModule } from "./products/products.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthModule } from "./auth/auth.module";
import { httpInterceptorsProviders } from "./shared/interceptoprs";
import { faArrowLeft, faArrowRight, faBars, faChevronDown, faChevronLeft, faChevronUp, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule,
    ProductsModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot()
  ],
  providers:[httpInterceptorsProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library:FaIconLibrary){
    library.addIcons(
      faArrowRight,
      faEyeSlash,
      faHeart,
      faChevronUp,
      faChevronDown,
      faChevronLeft,
      faArrowLeft,
      faBars)
 }
}
