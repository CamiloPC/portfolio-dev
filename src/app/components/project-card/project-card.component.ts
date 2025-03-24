import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProjectCardComponent {

  @Input()
  public linkRef: string = '';

  @Input()
  public imgSrc: string = '';

  @Input()
  public projectName: string = '';

  @Input()
  public projectDesc: string = '';

  @Input()
  public projectTechs: string = '';
}
