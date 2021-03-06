import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients.component';


const routes: Routes = [
  { path: "", component: PageListClientsComponent },
  { path: "add", component: PageAddClientsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
