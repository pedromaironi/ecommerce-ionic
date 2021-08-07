import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CategoriesService } from '../core/services/categories/categories.service';
import { ProductsService } from '../core/services/products/products.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers: [
    CategoriesService,
    ProductsService,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
