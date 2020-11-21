import { Component } from '@angular/core';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  mode = DATA.mode;

  openEditBlock(): void {
    this.mode['edit-mode'] = !this.mode['edit-mode'];
    this.mode['style-mode'] = false;
  }
  openStyleBlock(): void {
    this.mode['style-mode'] = !this.mode['style-mode'];
    this.mode['edit-mode'] = false;
  }
  blockEditor(): void {
    this.mode.blocked = true;
  }
}
