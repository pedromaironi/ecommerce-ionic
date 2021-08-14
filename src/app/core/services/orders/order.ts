/* eslint-disable no-underscore-dangle */
import { Orders } from '../../models/order.interface';
import { Products } from '../../models/product.interface';


export class OrdersObject {

  static _order: Orders;

  set _order(order: Orders) {
    OrdersObject._order = order;
  }

  get _order() {
    return OrdersObject._order;
  }

}
