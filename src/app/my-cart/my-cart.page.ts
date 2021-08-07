import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {

  products = [];
  productTotal: number;
  constructor() { }

  ngOnInit() {
    console.log(localStorage);
    for ( const items of Object.keys(localStorage)) {
      // console.log(localStorage[items]);
      // console.log(JSON.parse(localStorage[items]));
      this.products.push(JSON.parse(localStorage[items]));
    }
    for (const items of this.products) {
      console.log(items.price);
      // if(items)
      // this.productTotal += items.price;
      this.sumPrices(items.price);
    }

  }

  sumPrices(num: number) {
    this.productTotal = num;
  }

}
