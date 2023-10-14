import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interface/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { }

  getProductsList(): Observable<any>{
    return this.http.get<Product[]>('https://dummyjson.com/products');
  }

  getProductDetails(id:string){
    return this.http.get<Product>(`https://dummyjson.com/products/${id}`)
  }
}
