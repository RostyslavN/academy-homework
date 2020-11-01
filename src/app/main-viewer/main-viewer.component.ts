import { Component } from '@angular/core';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-main-viewer',
  templateUrl: './main-viewer.component.html',
  styleUrls: ['./main-viewer.component.css'],
})
export class MainViewerComponent {
  data = DATA;
}
