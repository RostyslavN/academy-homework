import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DATA } from '../shared/data';

@Component({
  selector: 'app-blocking-modal',
  templateUrl: './blocking-modal.component.html',
  styleUrls: ['./blocking-modal.component.css']
})
export class BlockingModalComponent {
  unlockEditor(form: NgForm): void {
    if (form.valid) DATA.mode.blocked = false;
    form.reset();
  }
}
