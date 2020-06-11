import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients.component';
import { FormAddClientsComponent } from './components/form-add-clients/form-add-clients.component';



@NgModule({
  declarations: [PageListClientsComponent, PageAddClientsComponent, FormAddClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
