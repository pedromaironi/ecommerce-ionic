/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { Products } from '../core/models/product.interface';
import { ProductsObject } from '../core/services/products/products';
import { ProductsService } from '../core/services/products/products.service';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  selectedSize: number;
  selectedColor: number;
  activeVariation: string;
  product: ProductsObject;
  featuredProducts: Products;
  itemsProducts: Products;
  productsDetails: Products;

  constructor(
    private animatioCntrl: AnimationController,
    private productService: ProductsService,
    private storage: StorageService
  ) {
    this.product = new ProductsObject();
  }

  async ngOnInit() {
    this.activeVariation = 'size';
    this.productsDetails = this.product._product;
    this.featuredProducts = this.productsDetails;
  }

  addToCart(product: Products) {
    console.log(product);
    const arrayOfProducts = [];
    arrayOfProducts.push(product);
    localStorage.setItem(product.id, JSON.stringify(product));
  }

  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation === 'color') {
      this.animatioCntrl
        .create()
        .addElement(document.querySelector('.sizes'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
        .fromTo('opacity', '1', '0.2')
        .play();

      this.animatioCntrl
        .create()
        .addElement(document.querySelector('.colors'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
        .fromTo('opacity', '0.2', '1')
        .play();
    } else {
      this.animatioCntrl
        .create()
        .addElement(document.querySelector('.sizes'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(100%)', 'translateX(0)')
        .fromTo('opacity', '0.2', '1')
        .play();

      this.animatioCntrl
        .create()
        .addElement(document.querySelector('.colors'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
        .fromTo('opacity', '1', '0.2')
        .play();
    }
  }

  changeSize(size: number) {
    this.selectedSize = size;
  }

  changeColor(color: number) {
    this.selectedColor = color;
  }
}
