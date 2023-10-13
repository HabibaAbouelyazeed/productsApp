import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Product[]>([]);
  constructor() { }

  getCart(){
    return this.cart.asObservable();
  }


  setCart(newCart : Product[]){
    this.cart.next(newCart);
  }
}
