import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from '../../models/order.interface';
import { Products } from '../../models/product.interface';
import { Users } from '../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url = 'https://ecommercepedro.herokuapp.com';
  products: Products;
  orders: Orders;

  constructor(private http: HttpClient) {}

  getAllOrders() {
    return this.http.get<Orders>(this.url + '/api/orders', {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    });
  }

  createNewOrder(product: Products[], totalPaid: number) {
    const user: Users = JSON.parse(localStorage.getItem('authentication'));
    const orderObj = {
      nameUser: user.name,
      product,
      orderTime: new Date(),
      orderDelivered: new Date(),
      total: totalPaid,
    };

    return this.http.post<Orders>(this.url + '/api/orders', orderObj);
  }
}
