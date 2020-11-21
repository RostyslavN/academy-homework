import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-generate-list',
  templateUrl: './generate-list.component.html',
  styleUrls: ['./generate-list.component.css']
})
export class GenerateListComponent implements OnInit {
  data = DATA;
  listType: string = '';

  @ViewChild('generateListForm') form: NgForm;

  ngOnInit() {
    this.data.exampleLayout = '';
    this.data.mode['is-example-allow'] = false;
  }

  checkFormValidity() {
    setTimeout(() => {
      this.data.mode['is-example-allow'] = this.form.valid;
    }, 0);
  }

  generateList(isExample?: boolean): void {
    let listLayout: string = `<ul style="list-style-type: ${this.form.value['mark-type']};">`;
    for (let i = 0; i < this.form.value['list-items']; i++) {
      listLayout += '<li>text</li>';
    }
    listLayout += '</ul>';

    if (isExample) {
      this.data.exampleLayout = listLayout;
    } else {
      this.form.reset();
      this.data.temporaryLayout = listLayout;
      this.data.mode['generate-element-open'] = false;
      this.data.mode['edit-mode'] = true;
    }
  }
}
