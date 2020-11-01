import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-generate-list',
  templateUrl: './generate-list.component.html',
  styleUrls: ['./generate-list.component.css']
})
export class GenerateListComponent {
  data = DATA;

  generateList(form: NgForm): void {
     let listLayout: string = `<ul style="list-style-type: ${form.value['mark-type']};">`;
     for (let i = 0; i < form.value['list-items']; i++) {
       listLayout += '<li>Text</li>';
     }
     listLayout += '</ul>';

     form.reset();
     this.data.temporaryLayout = listLayout;
     this.data.mode['main-editor-open'] = true;
     this.data.mode['generate-element-open'] = false;
  }
}
