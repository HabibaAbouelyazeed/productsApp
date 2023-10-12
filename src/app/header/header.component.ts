import { Component } from '@angular/core';
import { faHome, faCartShopping} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faHome = faHome;
  faCartShopping = faCartShopping;
}
