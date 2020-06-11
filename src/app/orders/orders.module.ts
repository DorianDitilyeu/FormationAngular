import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Observable } from 'rxjs';
import { FormAddOrderComponent } from './components/form-add-order/form-add-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';



@NgModule({
  declarations: [PageListOrdersComponent, FormAddOrderComponent, PageAddOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
