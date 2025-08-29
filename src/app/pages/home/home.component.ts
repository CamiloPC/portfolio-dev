import { Component } from '@angular/core';
import { BadgeComponent } from '../../components/badge/badge.component';
import { SocialAnchorComponent } from '../../components/social-anchor/social-anchor.component';
import { XpItemComponent } from '../../components/xp-item/xp-item.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    BadgeComponent,
    SocialAnchorComponent,
    XpItemComponent,
    ProjectCardComponent
  ],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HomeComponent { }
