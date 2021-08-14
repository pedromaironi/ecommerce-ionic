/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { Orders } from '../core/models/order.interface';
import { OrderDetail } from '../core/models/orderdetail.interface';
import { Users } from '../core/models/user.interface';
import { OrdersObject } from '../core/services/orders/order';
import { OrderService } from '../core/services/orders/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  numOfOrders = 0;
  ordersToShow = [];
  ordersDetail: OrderDetail;
  arrayOfOrders = [];
  ordersOfUser = [];
  username: string;
  orderObject: OrdersObject;

  constructor(private orderService: OrderService) {
    this.orderObject = new OrdersObject();
  }

  async ngOnInit() {
    await this.getAllOrders();
  }

  getAllOrders() {
    for (const items of Object.keys(localStorage)) {
      if (items === 'authentication') {
        const obj = JSON.parse(localStorage[items]);
        this.username = obj.name;
      }
    }

    this.orderService.getAllOrders().subscribe((value) => {
      for (const items of Object.keys(value)) {
        if (items === 'data') {
          for (const i of value[items]) {
            if (i.nameUser === this.username) {
              this.arrayOfOrders.push(i);
            }
          }
        }
      }
    });
  }

  goToItemsDetails(order: Orders) {
    this.orderObject._order = order;
  }

  randomNumber() {
    return Math.random() * (4950 - 1235) + 223;
  }
}
