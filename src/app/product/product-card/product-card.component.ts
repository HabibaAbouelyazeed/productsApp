import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interface/product';
import { faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() productItem!: Product;
  @Output() sendIdToParent = new EventEmitter();
  faStar = faStar;
  faCartShopping = faCartShopping;

  cart: Product[] = [];
  cartCount: number = 0;
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
  }

  getId(id: number) {
    this.sendIdToParent.emit(id);
  }

  addToCart() {
    if (this.cart.filter((e) => e.id === this.productItem.id).length > 0) {
      for (const item of this.cart) {
        if (item.id == this.productItem.id) {
          item.quantity ? '' : (item.quantity = 1);
          if (item.quantity < item.stock) {
            item.quantity++;
            this.cartCount++;
          }
        }
      }
    } else {
      this.productItem.quantity = 1;
      this.cart.push(this.productItem);
      this.cartCount++;
    }
    this.cartService.setCartCount(this.cartCount);
    this.cartService.setCart(this.cart);
  }
}
