import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class BadgeComponent {

  @Input()
  public info: string = '';
}
