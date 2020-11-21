import { Component } from '@angular/core';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-customization-block',
  templateUrl: './customization-block.component.html',
  styleUrls: ['./customization-block.component.css']
})
export class CustomizationBlockComponent {
  mode = DATA.mode;
}
