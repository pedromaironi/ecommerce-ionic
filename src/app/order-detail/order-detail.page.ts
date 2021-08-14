/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { Orders } from '../core/models/order.interface';
import { OrdersObject } from '../core/services/orders/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  orderObj: OrdersObject;
  ordersToShow: Orders;
  orders = [];
  constructor() {
    this.orderObj = new OrdersObject();
  }

  ngOnInit() {
    this.showOrderDetail();
  }

  showOrderDetail() {
    this.ordersToShow = this.orderObj._order;
    for (const item of Object.keys(this.ordersToShow.product)) {
      this.orders.push(this.ordersToShow.product[item]);
    }
  }
}
