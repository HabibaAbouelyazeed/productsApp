// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pipe
import { CalcDiscountPipe } from './calc-discount.pipe';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductsListComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    CalcDiscountPipe,
    CartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
