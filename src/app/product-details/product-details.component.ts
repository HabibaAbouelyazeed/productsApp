import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';
import {faStar} from  '@fortawesome/free-solid-svg-icons'
import { ProductsApiService } from '../services/products-api.service';
import { CartService } from '../services/cart.service';
// import ProductData from '../../assets/products-list.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productDetails !: Product;
  faStar = faStar;

  cart: Product[] = [];
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsApiService, private cartService: CartService ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id']
    this.productsService.getProductDetails(id).subscribe(
      (data) => {this.productDetails = data},
      (error) => console.log(error)
    );
    
    this.cartService.getCart().subscribe(
      (data) => this.cart = data,
      (error) => console.log(error)
    );
  }

  addToCart(){
    this.cart.push(this.productDetails)
    this.cartService.setCart(this.cart)
  }
}
