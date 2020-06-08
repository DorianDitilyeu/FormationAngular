import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-detale',
  templateUrl: './icon-detale.component.html',
  styleUrls: ['./icon-detale.component.scss']
})
export class IconDetaleComponent implements OnInit {
  public myIcon = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
