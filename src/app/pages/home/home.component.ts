import { Component } from '@angular/core';
import { BadgeComponent } from '../../components/badge/badge.component';
import { SocialAnchorComponent } from '../../components/social-anchor/social-anchor.component';
import { XpItemComponent } from '../../components/xp-item/xp-item.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BadgeComponent,
    SocialAnchorComponent,
    XpItemComponent
  ],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HomeComponent { }
