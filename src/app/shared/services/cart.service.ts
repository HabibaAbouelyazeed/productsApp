import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Product[]>([]);
  private cartCount = new BehaviorSubject<number>(0);
  constructor() { }

  getCart(){
    return this.cart.asObservable();
  }

  setCart(newCart : Product[]){
    this.cart.next(newCart);
  }

  getCartCount(){
    return this.cartCount.asObservable();
  }

  setCartCount(newCartCount : number){
    this.cartCount.next(newCartCount);
  }
}
