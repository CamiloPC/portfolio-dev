import { Component } from '@angular/core';
import { BadgeComponent } from '../../components/badge/badge.component';
import { SocialAnchorComponent } from '../../components/social-anchor/social-anchor.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BadgeComponent,
    SocialAnchorComponent
  ],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HomeComponent { }
