import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/orders';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Btn } from 'src/app/shared/interfaces/btn-i';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {

  public collection$: Observable<Order[]>;
  //public collection: Order[];
  public headers: string[];
  public states = Object.values(StateOrder);
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  private sub: Subscription;

  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.btnRoute = {
      label: "Add an order",
      route: "add"
    };
    this.btnHref = {
      label: "Go to google",
      href: "http://www.google.fr"
    };
    this.btnAction = {
      label: "Open dialogue",
      action: true
    }

    //this.sub = this.os.collection.subscribe((datas) => {
    //  this.collection = datas;
    //});
    this.collection$ = this.os.collection;
    this.headers = [
      "Type",
      "Client",
      "NbJours",
      "Tjm HT",
      "Total HT",
      "Total TTC",
      "State"
    ]
  }

  public changeState(item: Order, event) {
    console.log(event);
    this.os.changeState(item, event.target.value).subscribe((result) =>{
      item.state = result.state;
    });
  }

  public openPopUp() {
    console.log("Open popup orders");
  }

  ngOnDestroy(){
    //this.sub.unsubscribe();
  }
}
