import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class FooterComponent { }
