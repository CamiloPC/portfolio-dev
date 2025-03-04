import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-social-anchor',
  standalone: true,
  imports: [],
  templateUrl: './social-anchor.component.html',
  styles: [`
    a {
      display: inline-block;
      padding: 0.3rem;
      border: 1px solid;
      border-radius: 9999px;
      transition: transform 0.2s ease-in-out;
    }

    a:hover {
      transform: scale(1.1);
    }
  `],
})
export class SocialAnchorComponent {

  @Input()
  public ref: string = '';

  @Input()
  public iconClass: string = '';

  @Input()
  public anchorName: string = '';
}
