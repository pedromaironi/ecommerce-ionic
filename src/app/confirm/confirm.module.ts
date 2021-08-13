import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPageRoutingModule } from './confirm-routing.module';

import { ConfirmPage } from './confirm.page';
import { OrderService } from '../core/services/orders/order.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmPageRoutingModule
  ], providers: [
    OrderService
  ],
  declarations: [ConfirmPage]
})
export class ConfirmPageModule {}
