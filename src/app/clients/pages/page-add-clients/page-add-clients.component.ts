import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/shared/models/clients';

@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrls: ['./page-add-clients.component.scss']
})
export class PageAddClientsComponent implements OnInit, OnDestroy {

  public addSub: Subscription;
  public title: string;
  public subtitle: string;

  constructor(private os: ClientsService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = "Clients",
    this.subtitle = "Add a client";
  }

  public add(item: Client) {
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
