import { Products } from '../../models/product.interface';


export class ProductsObject {

  static _product: Products;

  set _product(product: Products) {
    // eslint-disable-next-line no-underscore-dangle
    ProductsObject._product = product;
  }

  get _product() {
    // eslint-disable-next-line no-underscore-dangle
    return ProductsObject._product;
  }

}
