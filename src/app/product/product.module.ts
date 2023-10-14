import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalcDiscountPipe } from '../shared/pipes/calc-discount.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    CartComponent,
    CalcDiscountPipe,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
  ]
})
export class ProductModule { }
