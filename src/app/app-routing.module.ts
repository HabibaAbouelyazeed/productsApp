import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: "",
    component: ProductsListComponent
  },
  {
    path: "details/:id",
    component: ProductDetailsComponent
  },
  {
    path: "register",
    component: RegisterPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
