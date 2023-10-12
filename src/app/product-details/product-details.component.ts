import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';
import ProductData from '../../assets/products-list.json';
import {faStar} from  '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  products: Product[] = ProductData;
  productDetails : any;
  faStar = faStar;
  constructor(private activatedRoute: ActivatedRoute) {}



  ngOnInit() {
    console.log('url id: ', +this.activatedRoute.snapshot.params['id']);

    this.productDetails = this.products.find(
      (product) => product.id === +this.activatedRoute.snapshot.params['id']
    );
    console.log(this.productDetails);
  }
}
