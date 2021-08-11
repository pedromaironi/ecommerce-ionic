import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCartPageRoutingModule } from './my-cart-routing.module';

import { MyCartPage } from './my-cart.page';
import { CartService } from '../core/services/cart/cart.service';
import { ProductsService } from '../core/services/products/products.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyCartPageRoutingModule],
  providers: [CartService, ProductsService],
  declarations: [MyCartPage],
})
export class MyCartPageModule {}
