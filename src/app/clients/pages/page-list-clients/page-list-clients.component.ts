import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Btn } from 'src/app/shared/interfaces/btn-i';
import { Subscription, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection$: Subject<Client[]> = new Subject();
  public headers: string[];
  public states = Object.values(StateClient);
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public btnDelete: Btn;

  constructor(private os: ClientsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.btnRoute = {
      label: "Add a client",
      route: "add"
    };
    this.btnHref = {
      label: "Go to google",
      href: "http://www.google.fr"
    };
    this.btnAction = {
      label: "Open dialogue",
      action: true
    };
    this.btnDelete = {
      label: "Delete Client",
      delete: true
    };

    this.os.collection.subscribe((datas) => {
      this.collection$.next(datas);
    });
    this.headers = [
      "Name",
      "State",
      "CA",
      "Comment",
      "Action"
    ]
  }

  public changeState(item: Client, event) {
    console.log(event);
    this.os.changeState(item, event.target.value).subscribe((result) =>{
      item.state = result.state;
    });
  }

  public openPopUp() {
    console.log("Open popup clients");
  }

  public delete(item: Client) {
    this.os.delete(item).subscribe((result) =>{
      this.os.collection.subscribe((col) => {
        this.collection$.next(col);
      })
    });
  }

}
