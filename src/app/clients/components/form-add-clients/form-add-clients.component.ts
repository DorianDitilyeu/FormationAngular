import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/clients';

@Component({
  selector: 'app-form-add-clients',
  templateUrl: './form-add-clients.component.html',
  styleUrls: ['./form-add-clients.component.scss']
})
export class FormAddClientsComponent implements OnInit {

  @Input() item = new Client();
  @Output() clicked: EventEmitter<Client> = new EventEmitter();
  public states = Object.values(StateClient);
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.item.id],
      state: [this.item.state],
      tva: [this.item.tva],
      name: [
        this.item.name,
        Validators.required
      ],
      ca: [
        this.item.name,
        Validators.required
      ],
      comment: [this.item.comment]
    })
  }

  public onSubmit() {
    this.clicked.emit(this.form.value);
  }

}
