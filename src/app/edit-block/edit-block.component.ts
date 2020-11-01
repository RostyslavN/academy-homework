import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-edit-block',
  templateUrl: './edit-block.component.html',
  styleUrls: ['./edit-block.component.css']
})
export class EditBlockComponent implements OnInit {
  data;

  ngOnInit(): void {
    this.data = DATA;

    if (this.data.layout.includes(this.data.temporaryLayout)) {
      this.data.temporaryLayout = '';
    }
  }

  saveLayout(form: NgForm): void {
    this.data.layout = form.value.layout;
    this.data.mode['edit-mode'] = false;
  }
  openGenerateElementBlock(): void {
    this.data.mode['main-editor-open'] = false;
    this.data.mode['generate-element-open'] = true;
  }
}
