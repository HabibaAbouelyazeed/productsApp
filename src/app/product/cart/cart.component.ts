import { Component } from '@angular/core';
import { Product } from '../../shared/interface/product';
import { CartService } from '../../shared/services/cart.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  faTrashCan = faTrashCan;
  cart: Product[] = [];
  cartCount: number = 0;
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(
      (data) => (this.cart = data),
      (error) => console.log(error)
    );

    this.cartService.getCartCount().subscribe(
      (data) => (this.cartCount = data),
      (error) => console.log(error)
    );

    this.calcTotal();
  }

  removeProduct(index: number) {
    let item: Product = this.cart[index];
    item.quantity ? '' : (item.quantity = 1);
    this.total -= this.cart[index].price * item.quantity;
    this.cartCount -= item.quantity;
    this.cart.splice(index, 1);
    this.cartService.setCart(this.cart);
    this.cartService.setCartCount(this.cartCount);
  }

  increaseQuantity(item: Product) {
    item.quantity ? item.quantity : (item.quantity = 1);
    if (item.quantity < item.stock) {
      item.quantity++;
      this.total += item.price;
      this.cartCount++;
    }
    this.cartService.setCart(this.cart);
    this.cartService.setCartCount(this.cartCount);
  }
  decreaseQuantity(item: Product, index: number) {
    item.quantity ? item.quantity : (item.quantity = 1);

    if (item.quantity > 1) {
      item.quantity--;
      this.total -= item.price;
      this.cartCount--;
    } else {
      this.removeProduct(index);
    }
    this.cartService.setCart(this.cart);
    this.cartService.setCartCount(this.cartCount);
  }

  calcTotal() {
    for (let item of this.cart) {
      item.quantity ? (this.total += item.price * item.quantity) : '';
    }
  }
}
