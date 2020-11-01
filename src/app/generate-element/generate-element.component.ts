import { Component, ViewEncapsulation } from '@angular/core';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-generate-element',
  templateUrl: './generate-element.component.html',
  styleUrls: ['./generate-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GenerateElementComponent {
  generatingElement: string = 'table';
  data = DATA;

  cancelGenerating(): void {
    this.data.mode['main-editor-open'] = true
    this.data.mode['generate-element-open'] = false;
  }
}
