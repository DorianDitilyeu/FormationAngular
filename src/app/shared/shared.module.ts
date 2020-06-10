import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { JourDirective } from './directives/jour.directive';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective, JourDirective],
  imports: [
    CommonModule
  ],
  exports: [
    BtnComponent,
    TableLightComponent,
    TotalPipe,
    StateDirective,
    JourDirective
  ]
})
export class SharedModule { }
