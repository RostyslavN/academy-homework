import { Component } from '@angular/core';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-style-block',
  templateUrl: './style-block.component.html',
  styleUrls: ['./style-block.component.css']
})
export class StyleBlockComponent {
  data = DATA;
  isColorPickerOpen: boolean = false;
  isBgColorPickerOpen: boolean = false;

  closePicker(event: KeyboardEvent): void {
    this.isBgColorPickerOpen = false;
    this.isColorPickerOpen = false;
  }

  pickTextColor(): void {
    this.isBgColorPickerOpen = false;
    this.isColorPickerOpen = true;
  }
  pickBgColor(): void {
    this.isColorPickerOpen = false;
    this.isBgColorPickerOpen = true;
  }
}
