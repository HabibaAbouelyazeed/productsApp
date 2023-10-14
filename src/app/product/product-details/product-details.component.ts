import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interface/product';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ProductsApiService } from '../../shared/services/products-api.service';
import { CartService } from '../../shared/services/cart.service';
// import ProductData from '../../assets/products-list.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productDetails!: Product;
  faStar = faStar;

  cart: Product[] = [];
  cartCount: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsApiService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.productsService.getProductDetails(id).subscribe(
      (data) => {
        this.productDetails = data;
      },
      (error) => console.log(error)
    );

    this.cartService.getCart().subscribe(
      (data) => (this.cart = data),
      (error) => console.log(error)
    );

    this.cartService.getCartCount().subscribe(
      (data) => (this.cartCount = data),
      (error) => console.log(error)
    );
  }

  addToCart() {
    if (this.cart.filter((e) => e.id === this.productDetails.id).length > 0) {
      for (const item of this.cart) {
        if (item.id == this.productDetails.id) {
          item.quantity ? '' : (item.quantity = 1);
          if (item.quantity < item.stock) {
            item.quantity++;
            this.cartCount++;
          }
        }
      }
    } else {
      this.productDetails.quantity = 1;
      this.cart.push(this.productDetails);
      this.cartCount++;
    }
    this.cartService.setCartCount(this.cartCount);
    this.cartService.setCart(this.cart);
  }
}
