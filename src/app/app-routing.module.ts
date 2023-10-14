import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { RegisterPageComponent } from './auth/register-page/register-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CartComponent } from './product/cart/cart.component';
import { authGuard } from './shared/guards/auth.guard';

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
    component: CartComponent,
    canActivate: [authGuard]
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
