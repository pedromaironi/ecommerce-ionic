/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Products } from '../core/models/product.interface';
import { CartService } from '../core/services/cart/cart.service';
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {
  quantity = 1;
  products = [];
  productTotal: number;
  today = Date.now();
  Items: any;
  ItemsV: any;
  totalPaid = [];
  cartCount: boolean;

  constructor(
    private cartService: CartService,
    private ProductService: ProductsService
  ) {}

  ngOnInit() {
    this.initCart();
  }

  initCart() {
    if (localStorage.length > 0) {
      this.cartCount = true;
      for (const items of Object.keys(localStorage)) {
        this.products.push(JSON.parse(localStorage[items]));
      }
      for (this.Items of this.products) {
        this.totalPaid.push(Number.parseFloat(this.Items.price));
      }
      this.productTotal = this.totalPaid.reduce((a, b) => a + b);
    } else {
      this.cartCount = false;
    }
  }

  async decreaseQuantity(product: Products) {
    const arrayNew = [];
    let priceProduct: number;
    const totalMultiplied = [];
    // console.log(this.products);
    // console.log(product.price * this.quantity);
    // console.log(product.name);

    if (product.quantity > 1) {
      for (this.Items of this.products) {
        // console.log(this.Items);
        // console.log(this.i);
        if (this.Items.name === product.name) {
          product.quantity = Number.parseFloat(product.quantity.toString()) - Number.parseFloat('1');
          const productNew = [];
          await this.ProductService.findById(this.Items._id)
            .toPromise()
            .then((value) => {
              for (const itemsv of Object.keys(value)) {
                if (itemsv === 'data') {
                  productNew.push(JSON.stringify(value[itemsv]));
                }
              }
              priceProduct = JSON.parse(productNew[0]).price;
              totalMultiplied.push(Number.parseFloat(priceProduct.toString()));
              totalMultiplied.push(Number.parseFloat(this.Items.price));
            });
          // console.log(JSON.parse(productNew[0]).price);
          // console.log(totalMultiplied);
          // this.Items.price = 1;
          this.Items.price = totalMultiplied.reduce((a: number, b: number) =>
            Math.abs(a - b)
          );
          // console.log(this.Items.price);
          // this.totalPaid.push(Number.parseFloat(this.Items.price));
        }
        arrayNew.push(this.Items);
      }
      // console.log(arrayNew);
      this.products = [];
      this.totalPaid = [];
      for (this.Items of arrayNew) {
        this.products.push(this.Items);
        this.totalPaid.push(Number.parseFloat(this.Items.price));
      }
      this.productTotal = this.totalPaid.reduce((a, b) => a + b);
    }
  }

  async increaseQuantity( product: Products) {
    const arrayNew = [];
    let priceProduct: number;
    const totalMultiplied = [];
    // console.log(this.products);
    // console.log(product.price * this.quantity);
    // console.log(product.name);

    for (this.Items of this.products) {
      // console.log(this.Items);
      // console.log(this.i);
      if (this.Items.name === product.name) {
        product.quantity = Number.parseFloat(product.quantity.toString()) + Number.parseFloat('1');
        const productNew = [];
        await this.ProductService.findById(this.Items._id)
          .toPromise()
          .then((value) => {
            for (const itemsv of Object.keys(value)) {
              if (itemsv === 'data') {
                productNew.push(JSON.stringify(value[itemsv]));
              }
            }
            priceProduct = JSON.parse(productNew[0]).price;
            totalMultiplied.push(Number.parseFloat(priceProduct.toString()));
            totalMultiplied.push(Number.parseFloat(this.Items.price));
          });
        // console.log(JSON.parse(productNew[0]).price);
        // console.log(totalMultiplied);
        // this.Items.price = 1;
        this.Items.price = totalMultiplied.reduce(
          (a: number, b: number) => a + b
        );
        // console.log(this.Items.price);
        // this.totalPaid.push(Number.parseFloat(this.Items.price));
      }
      arrayNew.push(this.Items);
    }
    // console.log(arrayNew);
    this.products = [];
    this.totalPaid = [];
    for (this.Items of arrayNew) {
      this.products.push(this.Items);
      this.totalPaid.push(Number.parseFloat(this.Items.price));
    }
    this.productTotal = this.totalPaid.reduce((a, b) => a + b);
  }

  addOrder() {
    console.log(this.products[0]);
  }
  // pay(){
  //     this.http.post<any>('http://157.230.27.240:3000/', {total: this.total*100})
  //     .subscribe(data => {
  //       console.log(data);
  //     });

  //     let items = this.cartService.getCart();
  //     for(let obj of items){

  //       obj.hour = this.today
  //       console.log(obj.hour)
  //       this.afAuth.authState.subscribe(auth =>{
  //         this.afDatabase.list(`oders/${auth.uid}`).push(obj); // sauvegarde les data dans la database
  //       })
  //     }

  //     this.router.navigate(['payment'])

  //   }

  //   deleteItem(Itemid){
  //     let items = this.cartService.getCart();
  //     let selected = {}
  //     let index = this.selectedItems.indexOf(Itemid)

  //     items.splice(index, 1);

  // }
}
