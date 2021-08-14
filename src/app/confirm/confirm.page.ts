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

  }

}
