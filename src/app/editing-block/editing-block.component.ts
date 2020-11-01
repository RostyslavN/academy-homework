import { Component } from '@angular/core';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-editing-block',
  templateUrl: './editing-block.component.html',
  styleUrls: ['./editing-block.component.css']
})
export class EditingBlockComponent {
  data = DATA;
}
