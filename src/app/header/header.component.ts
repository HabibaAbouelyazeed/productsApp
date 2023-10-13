import { Component } from '@angular/core';
import { faHome, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faHome = faHome;
  faCartShopping = faCartShopping;

  count: number = 0;

  constructor(private cartServies: CartService){}

  ngOnInit(){
    this.cartServies.getCart().subscribe(
      (data) => this.count = data.length,
      (error) => console.log(error)
    );
  }
}
