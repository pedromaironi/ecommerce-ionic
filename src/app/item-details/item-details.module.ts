import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetailsPageRoutingModule } from './item-details-routing.module';

import { ItemDetailsPage } from './item-details.page';
import { ProductsService } from '../core/services/products/products.service';
import { StorageService } from '../core/services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetailsPageRoutingModule
  ],
  providers: [
    ProductsService,
    StorageService
  ],
  declarations: [ItemDetailsPage]
})
export class ItemDetailsPageModule {}
