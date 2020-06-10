import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAffaire]'
})
export class AffaireDirective implements OnChanges {
  @Input() appAffaire: number;
  @HostBinding('class') nomClass: string;

  constructor() { }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appAffaire);
  }

  private formatClass(affaire: number): string {
    if (affaire >= 50000) {
      return 'state-inactive';
    } else {
      return 'state-active';
    }
  }

}
