import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'https://ecommercepedro.herokuapp.com';
  products: Products;

  constructor( private http: HttpClient ) { }

  getAllProducts() {
    return this.http.get<Products[]>(this.url + '/api/products', {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    });
  }


}
