import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-generate-table',
  templateUrl: './generate-table.component.html',
  styleUrls: ['./generate-table.component.css']
})
export class GenerateTableComponent implements OnInit {
  data = DATA;

  @ViewChild('generateTableForm') form: NgForm;

  ngOnInit() {
    this.data.exampleLayout = '';
    this.data.mode['is-example-allow'] = false;
  }

  checkFormValidity() {
    this.data.mode['is-example-allow'] = this.form.valid;
  }

  generateTable(isExample?: boolean): void {
    // debugger;

    let tableLayout: string = '<table style="border-collapse: collapse;">';
    for (let i = 0; i < +this.form.value.rows; i++) {
      tableLayout += '<tr>';
      for (let j = 0; j < +this.form.value.cells; j++) {
        tableLayout += `
          <td
            style="
              width: ${this.form.value['cell-width']}px;
              height: ${this.form.value['cell-height']}px;
              border: ${this.form.value['border-width']}px ${this.form.value['border-type']} ${this.form.value['border-color']};"
          ></td>
        `;
      }
      tableLayout += '</tr>';
    }
    tableLayout += '</table>';


    if (isExample) {
      this.data.exampleLayout = tableLayout;
    } else {
      this.form.reset();
      this.data.exampleLayout = '';
      this.data.temporaryLayout = tableLayout;
      this.data.mode['generate-element-open'] = false;
      this.data.mode['edit-mode'] = true;
    }
  }
}
