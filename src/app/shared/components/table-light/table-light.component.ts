import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../models/orders';
import { Client } from '../../models/clients';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  @Input() collection: Order[];
  //@Input() collection: Client[];
  @Input() headers: string[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.collection);
    console.log(this.headers);
  }

}
