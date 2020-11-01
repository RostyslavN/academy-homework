import { Component } from '@angular/core';

import { DATA } from './shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CKEditor';
  data = DATA;
}
