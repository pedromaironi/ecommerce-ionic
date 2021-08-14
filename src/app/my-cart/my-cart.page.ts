/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Products } from '../core/models/product.interface';
import { CartService } from '../core/services/cart/cart.service';
import { OrderService } from '../core/services/orders/order.service';
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
    private ProductService: ProductsService,
    private alertController: AlertController,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initCart();
  }

  initCart() {
    let bandVerifyLength = false;
    if (localStorage.length === 1) {
      if (Object.keys(localStorage).toString() === 'authentication') {
        bandVerifyLength = true;
      }
    }
    if (localStorage.length > 0 && bandVerifyLength === false) {
      this.cartCount = true;
      for (const items of Object.keys(localStorage)) {
        if (items === 'authentication') {
          this.cartCount = false;
        } else {
          this.cartCount = true;
          this.products.push(JSON.parse(localStorage[items]));
        }
      }
      for (this.Items of this.products) {
        this.totalPaid.push(Number.parseFloat(this.Items.price));
      }
      this.productTotal = this.totalPaid.reduce((a, b) => a + b);
    } else {
      this.cartCount = false;
    }
  }

  async decreaseQuantity(product: Products, cant) {
    const arrayNew = [];
    let priceProduct: number;
    const totalMultiplied = [];

    if (product.quantity > 1) {
      for (this.Items of this.products) {
        if (this.Items.name === product.name) {
          product.quantity =
            Number.parseFloat(product.quantity.toString()) -
            Number.parseFloat('1');
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
          this.Items.price = totalMultiplied.reduce((a: number, b: number) =>
            Math.abs(a - b)
          );
        }
        arrayNew.push(this.Items);
      }
      this.products = [];
      this.totalPaid = [];
      for (this.Items of arrayNew) {
        this.products.push(this.Items);
        this.totalPaid.push(Number.parseFloat(this.Items.price));
      }
      this.productTotal = this.totalPaid.reduce((a, b) => a + b);
    } else {
      localStorage.removeItem(product.id);
      this.products = [];
      this.initCart();
    }
  }

  async increaseQuantity(product: Products) {
    const arrayNew = [];
    let priceProduct: number;
    const totalMultiplied = [];

    for (this.Items of this.products) {
      if (this.Items.name === product.name) {
        product.quantity =
          Number.parseFloat(product.quantity.toString()) +
          Number.parseFloat('1');
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
        this.Items.price = totalMultiplied.reduce(
          (a: number, b: number) => a + b
        );
      }
      arrayNew.push(this.Items);
    }
    this.products = [];
    this.totalPaid = [];
    for (this.Items of arrayNew) {
      this.products.push(this.Items);
      this.totalPaid.push(Number.parseFloat(this.Items.price));
    }
    this.productTotal = this.totalPaid.reduce((a, b) => a + b);
  }

  addOrder() {
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación de orden',
      message: '¿Seguro que quieres realizar esta orden?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          },
        },
        {
          text: 'Realizar orden',
          handler: () => {
            this.router.navigateByUrl('/confirm');
            this.createOrder();
          },
        },
      ],
    });

    await alert.present();
  }

  createOrder() {
    this.orderService
      .createNewOrder(this.products, this.productTotal)
      .subscribe((data) => {
      });
    const orders = [];
    for (const items of Object.keys(localStorage)) {
      if (items !== 'authentication') {
        orders.push(JSON.parse(localStorage[items]));
      }
    }

    for (const value of orders) {
      localStorage.removeItem(value.id);
    }
  }
}
