import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { CartService } from '../services/cart.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  faTrashCan = faTrashCan;
  cart: Product[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(
      (data) => (this.cart = data),
      (error) => console.log(error)
    );
    this.calcTotal();
  }

  removeProduct(index: number, elem:any) {
    this.total -= (this.cart[index].price * elem.textContent);
    this.cart.splice(index,1);
    this.cartService.setCart(this.cart);
  }

  increaseQuantity(elem:any,i:number){
    if(elem.textContent < this.cart[i].stock){
      elem.textContent ++;
      this.total += this.cart[i].price;
    }
  }
  decreaseQuantity(elem:any,i:number){
    if(elem.textContent > 0){
      elem.textContent --;
      this.total -= this.cart[i].price;
    }
  }

  calcTotal(){
    for (let item of this.cart) {
      this.total += item.price;
    }
  }
}
