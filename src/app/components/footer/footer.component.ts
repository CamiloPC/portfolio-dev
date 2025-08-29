import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class FooterComponent { }
