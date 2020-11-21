import { Component, EventEmitter, Output } from '@angular/core';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-example-block',
  templateUrl: './example-block.component.html',
  styleUrls: ['./example-block.component.css']
})
export class ExampleBlockComponent {
  data = DATA;
  isViewerOpen: boolean = true;

  @Output() showExample = new EventEmitter();

  emitShowExample(): void {
    this.showExample.emit(null);
  }

  toogleViewer(): void {
    this.isViewerOpen = !this.isViewerOpen;
  }
}
