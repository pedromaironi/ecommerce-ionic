import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../core/models/orderdetail.interface';
import { Users } from '../core/models/user.interface';
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
  constructor(private orderService: OrderService) {}
  async ngOnInit() {
    await this.getAllOrders();
  }

  getAllOrders() {
    for (const items of Object.keys(localStorage)) {
      // console.log(items);
      if (items === 'authentication') {
        const obj = JSON.parse(localStorage[items]);
        this.username = obj.name;
      }
    }
    this.orderService.getAllOrders().subscribe((value) => {
      // console.log(value);
      for (const items of Object.keys(value)) {
        if (items === 'data') {
          for (const i of value[items]) {
            this.arrayOfOrders.push(i);
          }
        }
      }
    });
    let num = 0;
    for (const i of this.arrayOfOrders) {
      if (i.name === this.username) {
        this.ordersToShow.push(i);
      }
    }
  }

  randomNumber() {
    return Math.random() * (4950 - 1235) + 223;
  }
}
