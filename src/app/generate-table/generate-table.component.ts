import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-generate-table',
  templateUrl: './generate-table.component.html',
  styleUrls: ['./generate-table.component.css']
})
export class GenerateTableComponent {
  data = DATA;

  generateTable(form: NgForm): void {
    let tableLayout: string = '<table>';
    for (let i = 0; i < +form.value.rows; i++) {
      tableLayout += '<tr>';
      for (let j = 0; j < +form.value.cells; j++) {
        tableLayout += `
          <td
            style="
              width: ${form.value['cell-width']}px;
              height: ${form.value['cell-height']}px;
              border-style: ${form.value['border-type']};
              border-width: ${form.value['border-width']}px;
              border-color: ${form.value['border-color']};"
          ></td>
        `;
      }
      tableLayout += '</tr>';
    }
    tableLayout += '</table>';
    form.reset();

    this.data.temporaryLayout = tableLayout;
    this.data.mode['main-editor-open'] = true;
    this.data.mode['generate-element-open'] = false;
  }
}
