import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-layout-portfolio',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent
  ],
  templateUrl: './layout-portfolio.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class LayoutPortfolioComponent { }
