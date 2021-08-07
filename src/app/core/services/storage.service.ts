/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Products } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.initStorage();
  }

  addProductToCart(key: string, value: Products) {
    this.storage.set(key, value);
  }

  removeProductFromCart() {
  }

  async initStorage() {
    await this.storage.create();
  }


}
