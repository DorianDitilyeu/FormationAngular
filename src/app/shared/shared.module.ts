import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { JourDirective } from './directives/jour.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { RouterModule } from '@angular/router';
import { AffaireDirective } from './directives/affaire.directive';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective, JourDirective, TableDarkComponent, AffaireDirective],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule,
    TextModule
  ],
  exports: [
    BtnComponent,
    TableLightComponent,
    TableDarkComponent,
    TotalPipe,
    StateDirective,
    JourDirective,
    AffaireDirective,
    TemplatesModule,
    TextModule
  ]
})
export class SharedModule { }
