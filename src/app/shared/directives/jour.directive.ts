import { Directive, OnChanges, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appJour]'
})
export class JourDirective implements OnChanges {
  @Input() appJour: number;
  @HostBinding('class') nomClass: string;

  constructor() { }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appJour);
  }

  private formatClass(jour: number): string {
    if (jour >= 3) {
      return 'jour-up';
    } else {
      return 'jour-down';
    }
  }

}
