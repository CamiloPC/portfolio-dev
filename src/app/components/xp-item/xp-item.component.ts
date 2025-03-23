import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xp-item',
  standalone: true,
  imports: [],
  templateUrl: './xp-item.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class XpItemComponent {

  @Input()
  public time: string = '';

  @Input()
  public title: string = '';

  @Input()
  public description: string = '';

  @Input()
  public link?: string = '';
}
