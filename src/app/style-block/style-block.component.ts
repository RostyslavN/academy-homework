import { Component } from '@angular/core';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-style-block',
  templateUrl: './style-block.component.html',
  styleUrls: ['./style-block.component.css']
})
export class StyleBlockComponent {
  data = DATA;
}
