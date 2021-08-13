import { Products } from './product.interface';

export interface Orders{
  nameUser: string;
  product: Products[];
  orderTime: Date;
  orderDelivered: Date;
  total: number;
}
