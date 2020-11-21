import { Component, ViewChild } from '@angular/core';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-generate-element',
  templateUrl: './generate-element.component.html',
  styleUrls: ['./generate-element.component.css'],
})
export class GenerateElementComponent {
  generatingElement: string = 'table';
  data = DATA;

  @ViewChild('generateTable') tableGeneratingComponent;
  @ViewChild('generateList') listGeneratingComponent;
}
