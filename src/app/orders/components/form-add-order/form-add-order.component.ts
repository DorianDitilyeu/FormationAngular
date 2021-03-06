import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/shared/models/orders';

@Component({
  selector: 'app-form-add-order',
  templateUrl: './form-add-order.component.html',
  styleUrls: ['./form-add-order.component.scss']
})
export class FormAddOrderComponent implements OnInit {

  @Input() item = new Order();
  @Output() clicked: EventEmitter<Order> = new EventEmitter();
  public states = Object.values(StateOrder);
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHT: [this.item.tjmHT],
      nbJours: [this.item.nbJours],
      tva: [this.item.tva],
      state: [this.item.state],
      typePresta: [
        this.item.typePresta,
        Validators.required
      ],
      client: [
        this.item.client,
        Validators.compose([Validators.required, Validators.minLength(2)])
      ],
      comment: [this.item.comment],
      id: [this.item.id]
    });
  }

  public onSubmit() {
    this.clicked.emit(this.form.value);
  }

}
