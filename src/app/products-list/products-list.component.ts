import { Component } from '@angular/core';
import { Product } from '../interface/product';
import ProductData from '../../assets/products-list.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products: Product[] = ProductData;
  
  constructor(private router: Router){}

  navigateById(id: number){
    this.router.navigate(['details', id])
  }
  // ngOnInit(){
  //   console.log(this.products);
  // }
}
