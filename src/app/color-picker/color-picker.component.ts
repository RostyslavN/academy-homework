import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  colors = ['#39CCCC', '#85144b', '#33be70', '#2ECC40',
    '#e9ecef', '#FF4136', '#0074D9', '#000', '#FF851B'];
  data = DATA;
  @Input() editedStyle: string;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private eRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  closePicker(event: KeyboardEvent): void {
    if (!this.eRef.nativeElement.contains(event.target)
        && !(event.target as HTMLElement).classList.contains('pick-btn')) {
      this.close.emit();
    }
  }

  changeColor($event) {
    this.data.styles[this.editedStyle] = ($event.target as HTMLElement).style.backgroundColor;
    this.close.emit();
  }

}
