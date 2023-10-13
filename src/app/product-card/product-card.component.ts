import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interface/product';
import {faStar, faCartShopping} from  '@fortawesome/free-solid-svg-icons'
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() productItem !: Product;
  @Output() sendIdToParent = new EventEmitter();
  faStar = faStar;
  faCartShopping = faCartShopping;

  cart: Product[] = [];
  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.getCart().subscribe(
      (data) => this.cart = data,
      (error) => console.log(error)
    );
  }

  getId(id: number){
    this.sendIdToParent.emit(id);
  }

  addToCart(){
    this.cart.push(this.productItem)
    this.cartService.setCart(this.cart)
  }
}
