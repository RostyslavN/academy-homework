import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-edit-block',
  templateUrl: './edit-block.component.html',
  styleUrls: ['./edit-block.component.css']
})
export class EditBlockComponent implements OnInit {
  data;
  @ViewChild('layout') layoutBlock: ElementRef;

  ngOnInit(): void {
    this.data = DATA;
  }

  saveLayout(form: NgForm): void {
    this.data.layout = form.value.layout;
    this.data.temporaryLayout = '';
  }

  openGenerateElementBlock(): void {
    this.data.mode['edit-mode'] = false;
    this.data.mode['generate-element-open'] = true;
  }

  addHotkeyValue(tag: string): void {
    this.layoutBlock.nativeElement.value += tag;
  }
}
