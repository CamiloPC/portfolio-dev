import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeComponent } from '../../pages/home/home.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-layout-portfolio',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  templateUrl: './layout-portfolio.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class LayoutPortfolioComponent { }
