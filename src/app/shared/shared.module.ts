import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [
    BtnComponent,
    TableLightComponent,
    TotalPipe
  ]
})
export class SharedModule { }
