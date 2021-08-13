import { Component, OnInit } from '@angular/core';

import { Orders } from '../core/models/order.interface';
import { OrderService } from '../core/services/orders/order.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
  orders = [];
  currentTime: Date = new Date();
  constructor(
    private orderService: OrderService,
  ) {}

  ngOnInit() {
    this.sendOrder();
  }

  async sendOrder() {
    // for (const items of Object.keys(localStorage)) {
    //   // console.log(items);
    //   if (items !== 'authentication') {
    //     this.orders.push(JSON.parse(localStorage[items]));
    //   }
    // }
    // console.log(this.orders);
    // await this.orderService
    //   .getAllOrders()
    //   .subscribe((value) => {
    //     // console.log(value.nameUser);
    //     // console.log(value);
    //     for (const items of Object.keys(value)) {
    //       console.log(value[items]);
    //     }
    //     // console.log(value.products);
    //   });
  }

}
