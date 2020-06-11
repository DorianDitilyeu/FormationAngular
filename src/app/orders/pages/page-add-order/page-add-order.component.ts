import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/orders';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit, OnDestroy {

  public addSub: Subscription;
  public title: string;
  public subtitle: string;

  constructor(private os: OrdersService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = "Orders",
    this.subtitle = "Add an order";
  }

  public add(item: Order) {
    this.addSub = this.os.add(item).subscribe((result) => {
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

  ngOnDestroy(): void {
    if(this.addSub){
      this.addSub.unsubscribe();
    }
  }

}
