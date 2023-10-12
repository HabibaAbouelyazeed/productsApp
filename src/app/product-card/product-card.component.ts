import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interface/product';
import {faStar, faCartShopping} from  '@fortawesome/free-solid-svg-icons'


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


  getId(id: number){
    this.sendIdToParent.emit(id);
  }
}
