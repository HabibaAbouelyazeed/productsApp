import { Component } from '@angular/core';
import { faHome, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { CartService } from '../shared/services/cart.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faHome = faHome;
  faCartShopping = faCartShopping;

  cartCount : number = 0 ;
  
  constructor(private cartServies: CartService){}

  ngOnInit(){
    this.cartServies.getCartCount().subscribe(
      (data) => this.cartCount = data,
      (error) => console.log(error)
    );
  }
}
