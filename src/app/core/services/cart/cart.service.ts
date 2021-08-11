import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  static totalPaid: number;

  constructor() {}

  set totalPaid(num: number) {
    CartService.totalPaid = CartService.totalPaid + num;
  }

  get totalPaid() {
    // eslint-disable-next-line no-underscore-dangle
    return CartService.totalPaid;
  }
}
