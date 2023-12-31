import { Component } from '@angular/core';
import { Product } from '../../shared/interface/product';
import { Router } from '@angular/router';
import {ProductsApiService} from '../../shared/services/products-api.service'


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products !: Product[];
  
  constructor(private router: Router, private productsService: ProductsApiService){}

  ngOnInit(){
    this.productsService.getProductsList().subscribe(
      (data) => this.products = data.products,       
      (error) => console.log(error)
    );
  }

  navigateById(id: number){
    this.router.navigate(['details', id])
  }
}
